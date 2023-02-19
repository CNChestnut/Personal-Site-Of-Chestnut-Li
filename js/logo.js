function create_logo(dom, str) {

	var dataOfChestnut = ['C', 'h', 'e', 's', 't', 'n', 'u', 't',
		'#4285f4', '#ea4335', '#fbbc05', '#34a853', '#fbbc05', '#ea4335', '#4285f4', '#34a853'
	]

	var dataOfWS = [' | ', 'Webstudio',
		'#bbbbbb', '#777777'
	]

	dom.innerHTML = ''

	switch (str) {
		case 'C':
			for (i = 0; i < dataOfChestnut.length / 2; i++) {
				dom.innerHTML += '<span style="color:' + dataOfChestnut[i + dataOfChestnut.length / 2] + ';">' +
					dataOfChestnut[i] + '</span>'
			}
			break
		case 'C-WS':
			for (i = 0; i < dataOfChestnut.length / 2; i++) {
				dom.innerHTML += '<span style="color:' + dataOfChestnut[i + dataOfChestnut.length / 2] + ';">' +
					dataOfChestnut[i] + '</span>'
			}
			for (i = 0; i < dataOfWS.length / 2; i++) {
				dom.innerHTML += '<span style="color:' + dataOfWS[i + dataOfWS.length / 2] + ';">' +
					dataOfWS[i] + '</span>'
			}
			break
	}

}
