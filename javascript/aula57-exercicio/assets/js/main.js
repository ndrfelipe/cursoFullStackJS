const paragrafos = document.querySelector('.paragrafos');

const ps = paragrafos.querySelectorAll('p');   //retorna uma NodeList, que se comporta como array, 
                                    //pode ser utilizado as propriedados de array, mas não é array.

const estilosBody = getComputedStyle(document.body); //pegando o background do body
const bgColorBody = estilosBody.backgroundColor;
for (let p of ps){
    p.style.backgroundColor = bgColorBody;
    p.style.color = 'white';
    p.style.padding = '10px';
}

