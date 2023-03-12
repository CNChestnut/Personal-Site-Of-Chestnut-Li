function colorToColor(目标, 时间, startR, startG, startB, endR, endG, endB) {

	var rgbColor;
	var R, G, B;
	var rChangeNumber = (endR - startR) / 100,
		gChangeNumber = (endG - startB) / 100,
		bChangeNumber = (endB - startB) / 100;

	for (i = 0; i <= 100; i = i + 1) {
		R = Math.floor(startR + rChangeNumber * i);
		G = Math.floor(startG + gChangeNumber * i);
		B = Math.floor(startB + bChangeNumber * i);

		var rgbColor = `rgb(${R},${G},${B})`;
		setTimeout(目标 + `="` + rgbColor + `"`, 时间 / 100 * i);
	}
}
