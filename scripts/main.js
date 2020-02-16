function borrar_scan(){
  $("#scan").remove();
}

function init(){
  var selection = document.querySelector('#divCollages') !== null;
  if (selection) {
    agregarCollages();
    function agregarCollages () { 
      for (var i = 1; i < 89; i++) {  
        var currentDiv = document.getElementById("divCollages");
        var newDiv = document.createElement('div');
        var img = document.createElement("img");

        img.src = "projects/malviaje/" + i + ".png";
        img.setAttribute('width', '100%');

        newDiv.id = i;
        newDiv.className = "cuarto";
        newDiv.appendChild(img);  

        currentDiv.appendChild(newDiv);
      }   
    }
  }
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

swup.on('contentReplaced', function(){
  init();
});