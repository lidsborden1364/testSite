function fr(){
    document.getElementById("EN").style.display="none";
    document.getElementById("FR").style.display="block";
}

function en(){
    document.getElementById("FR").style.display="none";
    document.getElementById("EN").style.display="block";
}


function showVideo(x){
    document.getElementById("x"+x).style.display="block";
    document.getElementById(x).src="https://www.youtube.com/embed/"+x;
}

function showVimeoVideo(x){
    document.getElementById("x"+x).style.display="block";
    document.getElementById(x).src="http://player.vimeo.com/video/"+x;
}

function showOp1(){
    document.getElementById("OpLASER2").style.display="none";
    document.getElementById("OpLASER3").style.display="none";
    document.getElementById("OpLASER1").style.display="block";
}

function showOp2(){
    document.getElementById("OpLASER1").style.display="none";
    document.getElementById("OpLASER3").style.display="none";
    document.getElementById("OpLASER2").style.display="block";
}

function showOp3(){
    document.getElementById("OpLASER1").style.display="none";
    document.getElementById("OpLASER2").style.display="none";
    document.getElementById("OpLASER3").style.display="block";
}

function op2(){
    document.getElementById("op2letter").style.display="none";
    document.getElementById("op2lesson").style.display="block";
}

function op3(){
    document.getElementById("op3letter").style.display="none";
    document.getElementById("op3lesson").style.display="block";
}