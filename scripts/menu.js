function myFunction(x) {
	if (menu_celu.matches) {
		document.getElementById("menu").innerHTML =
		'<a href="/index.html">'+
		'<img src="/resources/logo.png" style="height: 120px; ">'+
		'</a>'+
		'<p style="font-size: 9pt">'+
		'<a class="link_normal" href="/about.html">PIERRE PUENTES </a>'+
		'AKA '+
		'<a class="link_normal" href="/bejuco.html"> BEJUCO</a>' +
		' &' +
		'<a class="link_normal" href="/derealization.html"> DRLZTN</a>'+
		'</p>'+
		'<p style="font-size: 9pt">'+
		'<a class="link_normal" href="/works.html">OTROS PROYECTOS</a>'+
		'					   '+
		'<a class="link_normal" href="https://derealizationnn.tumblr.com/">BLOG</a>'+
		'					   '+
		'<a class="link_normal" href="/contact.html">CONTACTO</a>'+
		'</p>';
	}	else {
		document.getElementById("menu").innerHTML =
		'<a href="/index.html">'+
		'<img src="/resources/logo.png" style="height: 120px; ">'+
		'</a>'+
		'<p style="font-size: 9pt">'+
		'<a class="link_normal" href="/about.html">PIERRE PUENTES</a>'+
		'<br>AKA'+
		'<a class="link_normal" href="/bejuco.html"> BEJUCO</a>' +
		'<br>&' +
		'<a class="link_normal" href="/derealization.html"> DRLZTN</a>'+
		'</p>'+
		'<p style="font-size: 9pt">'+
		'<a class="link_normal" href="/works.html">OTROS PROYECTOS</a>'+
		'<br>'+
		'<a class="link_normal" href="https://derealizationnn.tumblr.com/">BLOG</a>'+
		'<br>'+
		'<a class="link_normal" href="/contact.html">CONTACTO</a>'+
		'</p>';
	}
}
var menu_celu = window.matchMedia("(max-width: 480px)")
myFunction(menu_celu)
menu_celu.addListener(myFunction)