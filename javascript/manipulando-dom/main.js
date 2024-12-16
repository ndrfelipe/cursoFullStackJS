const form = document.querySelector("#form");

form.addEventListener('submit',function(e){
    e.preventDefault();

    const block = document.querySelector('.block');
    block.style.backgroundColor = definindoCor();



});

function definindoCor(){
    let background = document.getElementById('valorCor').value;
    if(background == 'azul' || background == "Azul"){
        background = 'blue';
        corCerta(background);
    }else if(background == 'amarelo' || background == "amarelo"){
        background = 'yellow';
        corCerta(background);
    }else if(background == 'vermelho' || background == "vermelho"){
        background = 'red';
        corCerta(background);
    }else if(background == 'rosa' || background == "Rosa"){
        background = 'pink';
        corCerta(background);
    }else if(background == 'preto' || background == "Preto"){
        background = 'black';
        corCerta(background);
    }else if(background == 'cinza' || background == "Cinza"){
        background = 'gray';
        corCerta(background);
    }else if(background == 'roxo' || background == "Roxo"){
        background = 'purple';
        corCerta(background);
    }else if(background == 'verde' || background == "Verde"){
        background = 'green';
        corCerta(background);
    }else{
        if(background == ''){
            background = "indefinida"
            corErrada(background);
        }else{
            corErrada(background);
        }
        
    }

    return background
}

function corErrada(cor){
    const paragrafo = document.querySelector('#resultado');
        paragrafo.innerHTML = `A cor '${cor}' não é válida`;
        paragrafo.style.padding = "5px";
        paragrafo.style.backgroundColor = "red";
        paragrafo.style.color = "white";
        paragrafo.style.borderRadius = "10px";
}

function corCerta(cor){
    const paragrafo = document.querySelector('#resultado');
        paragrafo.innerHTML = `Cor encontrada: ${cor}`;
        paragrafo.style.padding = "5px";
        paragrafo.style.backgroundColor = "transparent";
        paragrafo.style.color = "white";
        paragrafo.style.borderRadius = "10px";
}