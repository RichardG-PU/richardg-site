import React, { useEffect, useRef } from 'react';
import { loadAll } from './canvas/main';

const ParticleCanvas = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		if (canvasRef.current) {
			loadAll(canvasRef.current);
		}
	}, []);

	if (window.location.pathname !== "/") {
		return null;
	}

	return <canvas ref={canvasRef} className="absolute block top-0 left-0 w-full h-full"></canvas>;
};

export default ParticleCanvas;
