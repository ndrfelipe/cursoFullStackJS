// defineProperty - defineProperties

function Produto (nome, preco, estoque){

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave qd usar for in
        value: estoque, // valor
        writable: false, //controla se o valor pode ou não ser alterado
        configurable: false // controla se pode apagar ou reconfigurar a chave
    })

    //nesse caso é muito mais verboso, porém se têm mais controle sob o que pode ser feito ou não com a chave.
    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome, 
            writable: true, 
            configurable: true 
        },
        preco: {
            enumerable: true, 
            value: preco, 
            writable: true, 
            configurable: true 
        },
    });
};

const p1 = new Produto('Bolo', 20, 5);
p1.estoque = 25;
console.log(p1);