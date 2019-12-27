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
  borrar_scan();
});

