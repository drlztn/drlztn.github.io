var selection = document.querySelector('#divCollages') !== null;
if (selection) {
    agregarCollages();
    function agregarCollages() {
        for (var i = 1; i <= 88; i++) {
            var currentDiv = document.getElementById("divCollages");
            var newDiv = document.createElement('a');
            var img = document.createElement("img");

            img.src = "projects/malviaje/" + i + ".png";
            img.setAttribute('width', '100%');

            newDiv.href = "projects/malviaje/" + i + ".png";
            newDiv.id = i;
            newDiv.className = "cuarto";
            newDiv.setAttribute("data-fancybox", "gallery");
            newDiv.appendChild(img);

            currentDiv.appendChild(newDiv);
        }
        currentDiv.id = "divCollages_Creado";
    }
}