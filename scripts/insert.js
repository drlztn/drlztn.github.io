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

			img.src = "projects/" + proyecto + "/" + i + ".png";
			img.setAttribute('width', width_imagen);

			newDiv.href = "projects/" + proyecto + "/" + i + ".png";
			newDiv.id = i;
			newDiv.className = tamaño_div;
			newDiv.setAttribute("data-fancybox", "gallery");
			newDiv.appendChild(img);

			currentDiv.appendChild(newDiv);
		}
		currentDiv.id = seleccion + "_Creado";
	}
}