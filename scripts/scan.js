getName();

images = [];

mousePos = {
	x:-1000,
	y:-1000
};

lastX = -1000;
lastY = -1000;

var titulo;

function getName(){
	$('.trigger')
		.on('mouseover', function(e) {
			titulo = $(this).html();
		}); 
}

$('.trigger')
	.on('mouseover', function(e) {
		titulo = $(this).html();
	}); 

function spawnImage(x, y) {
	if (lastX === x && lastY === y) {
		return
	}

	lastX = x;
	lastY = y;

	var image = document.createElement('img');
	image.setAttribute('src', '../resources/scan/' + titulo + '.png');
	image.setAttribute('class', 'overlays');
	image.setAttribute('width', 500);
	image.setAttribute('height', 500);
	image.setAttribute('id', 'scan');
	image.style.left = x - 64 + 'px';
	image.style.top = 0 - screen.height/5 + y + 'px';
	images.push(image);

	document.body.appendChild(image);
}

function repeater() {
	setTimeout(function () {
		spawnImage(mousePos.x, mousePos.y);
		repeater();
	},1);
}

$('.trigger')
	.on('mousemove', function(e) {
		mousePos.x = e.pageX;
		mousePos.y = e.pageY;
	});
  
function removeImage() {
	setTimeout(function() {
		if (images.length > 1) {
			images.shift().remove();
		}
		removeImage();
	}, 25);
	$('.trigger').on('mouseout', function(e){
		$("#scan").remove();
	});
}

document.addEventListener('DOMContentLoaded', function(event) {
	getName(); 
	spawnImage(mousePos.x, mousePos.y);
	repeater();
	removeImage();
});