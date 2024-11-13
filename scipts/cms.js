document.getElementById("formQuiz")
.addEventListener('submit', checkQuiz)

function checkQuiz(event){
    event.preventDefault();
    var checkW2Answers = document.getElementsByName("checkW2")//Pilla los checkW2 por name
    var imgCheckW2 = document.getElementById("checkImg1")  //Muestra una imagen según la respuesta
    var checkW2 = true              //Almacena si está bien o mal en función del if
    if(checkW2Answers[0].checked &&     //Comprueba que el 0 y 1 están seleccionados y que el 2 no está selecionado
        checkW2Answers[1].checked &&
        !checkW2Answers[2].checked){
            checkW2=true
        }else{
            checkW2=false}
    

    
    if(!checkW2){
        imgCheckW2.src="../media/wrong.jpg"
    }else{
        imgCheckW2.src="../media/checked.jpg"
    }

    var radioIOTAnswer = document.getElementsByName("radioIOT")
    var imgElement = document.getElementById("checkImg2")
    if(radioIOTAnswer[1].checked){                  //Comprueba que está selecionada la segunda opción
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