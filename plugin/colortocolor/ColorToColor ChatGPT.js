function colorToColor(target, time, startColor, endColor) {
	const start = hexToRgb(startColor);
	const end = hexToRgb(endColor);
	const diff = [end[0] - start[0], end[1] - start[1], end[2] - start[2]];
	let startTime = null;
  
	function step(currentTime) {
	  if (!startTime) {
		startTime = currentTime;
	  }
	  const elapsedTime = currentTime - startTime;
	  const progress = Math.min(elapsedTime / time, 1);
  
	  const r = Math.round(start[0] + diff[0] * progress);
	  const g = Math.round(start[1] + diff[1] * progress);
	  const b = Math.round(start[2] + diff[2] * progress);
  
	  target.style.backgroundColor = `rgb(${r},${g},${b})`;
  
	  if (progress < 1) {
		window.requestAnimationFrame(step);
	  }
	}
  
	window.requestAnimationFrame(step);
  }
  
  function hexToRgb(hex) {
	const r = parseInt(hex.slice(1, 3), 16);
	const g = parseInt(hex.slice(3, 5), 16);
	const b = parseInt(hex.slice(5, 7), 16);
	return [r, g, b];
  }
  