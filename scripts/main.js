//Fancybox
lightbox();
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

//Borrar scan
function borrar_scan(){
	$("#scan").remove();
}

//Swup
const swup = new Swup({
	plugins: [
		new SwupSlideTheme({
			reversed: true
		}), 
		new SwupScrollPlugin(),
		new SwupScriptsPlugin({
			head: false,
			body: true
		})
	]
});

const options = {
	linkSelector:
	'a[href^="../"], a[href^="/"]'
};

swup.on('willReplaceContent', function(){
	borrar_scan();
});

swup.on('transitionEnd', function(){
	borrar_scan();
});

swup.on('contentReplaced', function(){
	collages(); //Sólo en un malviaje en tabogo
	lightbox();
});

//Agregar collages
function collages(){
	var selection = document.querySelector('#divCollages') !== null;
	if (selection) {
		agregarCollages();
		function agregarCollages () { 
			for (var i = 1; i <= 88; i++) {  
				var currentDiv = document.getElementById("divCollages");
				var newDiv = document.createElement('a');
				var img = document.createElement("img");

				img.src = "projects/malviaje/" + i + ".png";
				img.setAttribute('width', '100%');

				newDiv.href = "projects/malviaje/" + i + ".png";
				newDiv.id = i;
				newDiv.className = "cuarto";
				newDiv.setAttribute('data-fancybox', 'gallery'); 
				newDiv.appendChild(img); 

				currentDiv.appendChild(newDiv);
			}
		}
	}
}