export function semaforo(cor){
    let msg = "";
    if(cor != "verde" && cor != "vermelho")
    {
        msg= "invalido";
    }
    else if (cor == "verde" ){
        msg = "pode passar";
    }
    else {
        msg = "aguarde";
    }
    return msg;
}

export function diasemana(dia){
    let msg = "";
    if(dia==0){
        msg="domingo";
    }
    else if (dia==1){
        msg="segunda";
    }
    else if (dia==2){
        msg="terça";
    }
    else if (dia==3){
        msg="quarta";
    }
    else if (dia==4){
        msg="quinta";
    }
    else if (dia==5){
        msg="sexta";
    }
    else if (dia==6){
        msg="sabado";
    }
    return msg;
 
}

export function fatorial(n){
    let result=n;
    let minicial=n-1;
    for (let i=minicial;i> 1; i--){
        result *= i;
    }
    return result;
}