	function typing(oText, oTime){
		str=oText.innerHTML;
		oText.innerHTML='';
		let i = 0;
		let timer = setInterval(() => {
			if (oText.innerHTML.length < str.length) {
				oText.innerHTML += str[i++];
			} else {
				clearInterval(timer);
			}
		}, oTime)
	};