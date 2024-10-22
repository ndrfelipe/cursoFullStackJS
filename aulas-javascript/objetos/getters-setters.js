// defineProperty - defineProperties

function Produto (nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave qd usar for in
        configurable: false, // controla se pode apagar ou reconfigurar a chave
        
        get: function(){
            return estoquePrivado
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError("Valor inválido");
                return;
            }

            estoquePrivado = valor
        }

    })

};

// const p1 = new Produto('Bolo', 20, 5);
// p1.estoque = 23
// console.log(p1);

function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('T', 'a')
            nome = valor;
        }
    }
}

const p2 = criaProduto('Jason');
p2.nome = 'Teste'
console.log(p2.nome)