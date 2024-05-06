function inserir(num){
    document.querySelector(".visor").innerHTML += num;
}

function clean(){
    document.querySelector(".visor").innerHTML = "";
}

function back(){
    let visor = document.querySelector(".visor").innerHTML;
    document.querySelector('.visor').innerHTML = visor.substring(0, visor.length -1);
}

function somar(){
    let visor = document.querySelector('.visor').innerHTML;
    document.querySelector('.visor').innerHTML = eval(visor);
    if(visor){
        document.querySelector('.visor').innerHTML = eval(visor);
    }
    else{
        document.querySelector('.visor').innerHTML ="nenhum comando";
    }
}
