
function pipoca(tempo){
    if (tempo >= 10){
        menssagem = 'Prato pronto, bom apetite!!!';
    }if( tempo >= 20){
        menssagem = 'A comida queimou!!!';
    }if(tempo < 10){
        menssagem = 'Tempo insuficiente!!!';
    }if(tempo >= 30){
        menssagem = 'kabumm!!!';
    }
  return console.log(menssagem);
}

function macarrao(tempo){
    if (tempo >= 8){
        menssagem = 'Prato pronto, bom apetite!!!';
    }if( tempo >= 16){
        menssagem = 'A comida queimou!!!';
    }if(tempo < 8){
        menssagem = 'Tempo insuficiente!!!';
    }if(tempo >= 24){
        menssagem = 'kabumm!!!';
    }
  return console.log(menssagem);
}
function carne(tempo){
    if (tempo >= 15){
        menssagem = 'Prato pronto, bom apetite!!!';
    }if( tempo >= 30){
        menssagem = 'A comida queimou!!!';
    }if(tempo < 15){
        menssagem = 'Tempo insuficiente!!!';
    }if(tempo >= 45){
        menssagem = 'kabumm!!!';
    }
  return console.log(menssagem);
}

function feijao(tempo){
    if (tempo >= 12){
        menssagem = 'Prato pronto, bom apetite!!!';
    }if( tempo >= 24 ){
        menssagem = 'A comida queimou!!!';
    }if(tempo < 12){
        menssagem = 'Tempo insuficiente!!!';
    }if(tempo >= 36){
        menssagem = 'kabumm!!!';
    }
  return console.log(menssagem);
}

function brigadeiro(tempo){
    if (tempo >= 8){
        menssagem = 'Prato pronto, bom apetite!!!';
    }if( tempo >= 16){
        menssagem = 'A comida queimou!!!';
    }if(tempo < 8){
        menssagem = 'Tempo insuficiente!!!';
    }if(tempo >= 24){
        menssagem = 'kabumm!!!';
    }
  return console.log(menssagem);
}

function microondas(prato,tempo){
    
    switch(prato){
        case 1:
         return pipoca(tempo);
            break;
        case 2:
         return macarrao(tempo);
            break;
        case 3:
          return carne(tempo);
            break;
        case 4:
          return feijao(tempo);
            break;
        case 5:
         return brigadeiro(tempo);
            break;
       default:
         prato = 'Prato inexistente!!';
         return console.log(prato);
    }
  }


microondas(3,15);
microondas(3,29);
microondas(3,14);
microondas(3,30);
microondas(3,40);
microondas(3,45);



