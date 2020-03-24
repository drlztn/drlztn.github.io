var selection = document.querySelector('#divObras') !== null;
if (selection) {
    agregarObras();
    function agregarObras() {
        for (var i = 1; i <= 16; i++) {
            var currentDiv = document.getElementById("divObras");
            var newDiv = document.createElement('a');
            var img = document.createElement("img");

            img.src = "projects/jamesusill/" + i + ".png";
            img.setAttribute('width', '100%');

            newDiv.href = "projects/jamesusill/" + i + ".png";
            newDiv.id = i;
            newDiv.className = "tercio";
            newDiv.setAttribute("data-fancybox", "gallery");
            newDiv.appendChild(img);

            currentDiv.appendChild(newDiv);
        }
        currentDiv.id = "divObras_Creado";
    }
}