// BORRAR SCAN //
function borrar_scan(){
	$("#scan").remove();
}

// FANCYBOX //
function lightbox(){
	$('[data-fancybox="gallery"]').fancybox({
		protect: true,
		buttons : [
			'share',
			'close',
		],
		infobar: false
	});
	$.fancybox.defaults.hash = false;
}

lightbox();

// SWUP //
const options = {
	linkSelector:
	'a[href^="../"], a[href^="/"]'
};

const swup = new Swup({
	plugins: [
		new SwupSlideTheme({
			reversed: true
		}),
		new SwupScrollPlugin(),
		new SwupScriptsPlugin()
	]
});

swup.on('willReplaceContent', function(){
	borrar_scan();
});

swup.on('transitionEnd', function(){
	borrar_scan();
});

swup.on('contentReplaced', function(){
	insertar_contenido('divCollages', 88, "malviaje", '100%', "cuarto");
	insertar_contenido("divObras", 16, "jamesusill", '98%', "cuarto");
	lightbox();
});

// INSERTAR CONTENIDO //
function insertar_contenido(div, cant, proyecto, w, clase) {
	var selection = document.querySelector('#' + div) !== null;

	if (selection) {
		agregarContenido(cant, div, proyecto, w, clase);
	}

	function agregarContenido(cantidad, seleccion, proyecto, width_imagen, tamaño_div) {
		for (var i = 1; i <= cantidad; i++) {
			var currentDiv = document.getElementById(seleccion);

			var newDiv = document.createElement('a');
			var img = document.createElement("img");

			img.src = proyecto + "/" + i + ".png";
			img.setAttribute('width', width_imagen);

			newDiv.href = proyecto + "/" + i + ".png";
			newDiv.id = i;
			newDiv.className = tamaño_div;
			newDiv.setAttribute("data-fancybox", "gallery");
			newDiv.appendChild(img);

			currentDiv.appendChild(newDiv);
		}
		currentDiv.id = seleccion + "_Creado";
	}
}