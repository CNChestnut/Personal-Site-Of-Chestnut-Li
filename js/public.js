function create_logo(dom, str) {

	var dataOfChestnut = ['C', 'h', 'e', 's', 't', 'n', 'u', 't',
		'#4285f4', '#ea4335', '#fbbc05', '#34a853', '#fbbc05', '#ea4335', '#4285f4', '#34a853'
	]

	var dataOfCWS = ['C', 'h', 'e', 's', 't', 'n', 'u', 't', ' | ', 'Webstudio',
		'#4285f4', '#ea4335', '#fbbc05', '#34a853', '#fbbc05', '#ea4335', '#4285f4', '#34a853', '#bbbbbb', '#777777'
	]

	dom.innerHTML = ''

	switch (str) {
		case 'chestnut':
			for (i = 0; i < dataOfChestnut.length / 2; i++) {
				dom.innerHTML += '<span style="color:' + dataOfChestnut[i + dataOfChestnut.length / 2] + ';">' +
					dataOfChestnut[i] + '</span>'
			}
			break
		case 'cws':
			for (i = 0; i < dataOfCWS.length / 2; i++) {
				dom.innerHTML += '<span style="color:' + dataOfCWS[i + dataOfCWS.length / 2] + ';">' + dataOfCWS[i] +
					'</span>'
			}
			break
	}

}


var ua = navigator.userAgent

function get_UA() {
	return ua
}

function init_info() {
	var o_info = document.querySelectorAll('div.info')
	for (i = 0; i < o_info.length; i++) {
		o_info[i].innerHTML = 'ℹ️' + o_info[i].innerHTML
		console.log(o_info[i], 'succeed')
	}
}


function js_onload_init() {
	init_info();
}
