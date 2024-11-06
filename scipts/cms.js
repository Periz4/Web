document.getElementById("formQuiz")
.addEventListener('submit', checkQuiz)

function checkQuiz(event){
    event.preventDefault();
    var checkW2Answers = document.getElementsByName("checkW2")
    var imgCheckW2 = document.getElementById("checkImg1")
    var checkW2 = true
    if(checkW2[0].checked) and 
        (checkW2[1].checked) ;and
        (!checkW2[2].checked)
    
    }
    if(!checkW2){
        imgCheckW2.src="../media/wrong.jpg"
    }else{
        imgElement.src="../media/checked.jpg"
    }

    var radioIOTAnswer = document.getElementsByName("radioIOT")
    var imgElement = document.getElementById("checkImg2")
    if(radioIOTAnswer[1].checked){
        imgElement.src="../media/checked.jpg"

    }else{imgElement.src="../media/wrong.jpg"}

    var images=document.getElementsByClassName("checkImgs")
    for(i =0; i<images.length;i++){
        images[i].style.visibility = 'visible'
    }
}
function cleanImages(){
    var images = document.getElementsByClassName("checkImgs")
    for (i = 0; i<images.length;i++){
        images[i].style.visibility = 'hidden'
    }
}