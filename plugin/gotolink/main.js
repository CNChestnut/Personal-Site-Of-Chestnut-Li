function gotolink_tips(url){
	var p1=document.createElement('p')
	p1.innerHTML='你将前往以下网站'
	var p2=document.createElement('p')
	p2.innerHTML=url
	
	var tip=document.createElement('div')
	tip.appendChild(p1)
	tip.appendChild(p2)
	tip.style.position='position'
	tip.style.left='10vw'
	tip.style.right='10vw'
	tip.style.border='0.1vmin solid #000'
	document.body.appendChild(tip)
}