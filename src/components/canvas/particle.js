import vector from "./vector";

const particle = {
	position: null,
	velocity: null,

	create: function (x, y, speed, direction, text) {
		const obj = Object.create(this);
		obj.position = vector.create(x, y);
		obj.velocity = vector.create(0, 0);
		obj.velocity.setLength(speed);
		obj.velocity.setAngle(direction);
		obj.text = text;
		return obj;
	},

	update: function () {
		this.position.addTo(this.velocity);
	}
};

export default particle;
