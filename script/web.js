
document.getElementById('test').addEventListener('submit', function (event) {
    event.preventDefault();
    verificarRespuestas();
 });
 
 function verificarRespuestas() { // Cramos esta función para verificar las respuestas 
   
    const checkboxes = Array.from(document.querySelectorAll('input[name="P1"]:checked'));
    const radios = Array.from(document.querySelectorAll('input[name="P2"]:checked'));
 
    const imagen1 = document.getElementById('imagen1'); 
    const imagen2 = document.getElementById('imagen2'); 
   
   
    imagen1.style.display = 'none';
    imagen2.style.display = 'none';
 
    // Señala cuales son las opciones correctas en el checkbox 
    const opcionesCorrectasP1 = checkboxes.some(checkbox => checkbox.value === 'YT') && 
                                checkboxes.some(checkbox => checkbox.value === 'GM') &&
                                checkboxes.length === 2;
 
    const opcionesCorrectasP2 = radios.some(radio => radio.value === 'información');
 
    // Muestra la imagen del tick si las opciones son correctas 
    if (opcionesCorrectasP1) {
        imagen1.src = "../media/checked.jpg";
        imagen1.style.display = 'block';
    } else {  // Para el resto de respuestas devolverá la imagen de la cruz 
        imagen1.src = "../media/wrong.jpg";
        imagen1.style.display = 'block';
    }
 
    // MUestra la imagen del tick si las opciones son correctas 
    if (opcionesCorrectasP2) {
        imagen2.src = "../media/checked.jpg";
        imagen2.style.display = 'block';
    } else {  // Para el resto de respuestas devolverá la imagen de la cruz 
        imagen2.src = "../media/wrong.jpg";
        imagen2.style.display = 'block';
    }
 }
 
 function cleanImages() {
  
    const imagen1 = document.getElementById('imagen1');
    const imagen2 = document.getElementById('imagen2');
    imagen1.style.display = 'none';
    imagen2.style.display = 'none';
 }
 