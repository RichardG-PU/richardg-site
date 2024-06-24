import particle from './particle';

export function loadAll(canvas) {
	var context = canvas.getContext("2d"),
		width = (canvas.width = window.innerWidth),
		height = (canvas.height = window.innerHeight),
		particles = [],
		numParticles = 15,
		minYPixelDistance = 20,
		skillsData = null;

	function resizeCanvas() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		width = canvas.width;
		height = canvas.height;
	}

	window.addEventListener("resize", () => { resizeCanvas(); update(); });

	fetch("/skills.json")
		.then((response) => response.json())
		.then((data) => {
			skillsData = data;
			createParticles();
			update();
		})
		.catch((error) => {
			console.error("Error fetching JSON data:", error);
		});

	function createParticles() {
		for (var i = 0; i < numParticles; i += 1) {
			createParticle();
		}
	}

	function createParticle() {
		var yPos, xPos;
		do {
			yPos = generateRandomYPosition();
			xPos = Math.random() * width;
		} while (isTooCloseY(yPos, minYPixelDistance));
		if (skillsData) {
			var randomCategory = Math.random() < 0.5 ? "Languages" : "Software";
			var randomValue =
				skillsData.skills[randomCategory][
				Math.floor(Math.random() * skillsData.skills[randomCategory].length)
				];
			var speed = height < width ? Math.random() : Math.random() / 3;
			particles.push(
				particle.create(xPos, yPos, speed, 0, randomValue)
			);
		}
	}

	function generateRandomYPosition() {
		var yPos;
		do {
			yPos = Math.random() * height;
		} while (isTooCloseY(yPos, minYPixelDistance));
		return yPos;
	}

	function isTooCloseY(y, threshold) {
		for (var i = 0; i < particles.length; i++) {
			var p = particles[i];
			var yDistance = Math.abs(y - p.position.getY());
			if (yDistance < threshold) {
				return true;
			}
		}
		return false;
	}

	function update() {
		context.clearRect(0, 0, width, height);

		for (var i = 0; i < particles.length; i += 1) {
			var p = particles[i];
			p.update();
			var textX = p.position.getX();
			var textY = p.position.getY();

			if (textY <= 30) {
				p.position.setY(generateRandomYPosition());
			}

			if (textX > width) {
				p.position.setX(0);
				p.position.setY(generateRandomYPosition());
			}

			if (skillsData) {
				context.save();
				context.fillStyle = "#282828";
				context.translate(textX, textY);
				if (height > width) {
					context.scale(1, 0.4);
					context.font = "bold 20px Verdana";
				} else {
					context.scale(1, 0.5);
					context.font = "bold 30px Verdana";
				}
				context.fillText(p.text, 0, 0);
				context.restore();
			}
		}

		if (document.body.contains(canvas)) {
			requestAnimationFrame(update);
		}
	}
}
