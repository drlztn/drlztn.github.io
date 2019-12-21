function init() { 
    if (document.querySelector('body')) {
		  $("body").niceScroll({
  			cursorcolor:"black",
  			cursorwidth:"7px",
  			cursorborderradius: 0,
  			cursorborder:'none'
		});
    $("body").getNiceScroll().resize();
	}
}

function borrar_scan(){
  $("#scan").remove();
}

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
	init();
  borrar_scan();
});

init();