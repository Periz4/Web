document.getElementById("formQuizt")
.addEventListener('submit', checkQuiz)

function checkQuiz(event){
    event.preventDefault();
    var checktAnswers = document.getElementsByName("checkt")//Pilla los checkW2 por name
    var imgCheckt = document.getElementById("checkImg1")  //Muestra una imagen según la respuesta
    var checkt = true              //Almacena si está bien o mal en función del if
    if(checktAnswers[0].checked &&     //Comprueba que el 0 y 1 están seleccionados y que el 2 no está selecionado
        checktAnswers[1].checked &&
        !checktAnswers[2].checked){
            checkt=true
        }else{
            checkt=false}
    

    
    if(!checkt){
        imgCheckt.src="../media/wrong.jpg"
    }else{
        imgCheckt.src="../media/checked.jpg"
    }

    var radiotAnswer = document.getElementsByName("radiot")
    var imgElement = document.getElementById("checkImg2")
    if(radiotAnswer[1].checked){                  //Comprueba que está selecionada la segunda opción
        imgElement.src="../media/checked.jpg"

    }else{imgElement.src="../media/wrong.jpg"}

    var images=document.getElementsByClassName("checkImgs")
    for(i =0; i<images.length;i++){
        images[i].style.visibility = 'visible'
    }
}
function cleanImages(){             //Quita las fotos con el boton reiniciar
    var images = document.getElementsByClassName("checkImgs")
    for (i = 0; i<images.length;i++){
        images[i].style.visibility = 'hidden'
    }
} 