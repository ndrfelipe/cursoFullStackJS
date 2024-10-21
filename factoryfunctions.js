// factory functions (Funções fábricas)
// Getters e Setters
// .toFixed()
// método .shift(), .split(), .join()

function dadosBoletim(nome, sobrenome, cadeira, n1, n2){
    return {
        nome,

        sobrenome,

        cadeira,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        get notaMedia(){
            const media = (n1 + n2) / 2;
            return media.toFixed(2);
        },

        get situacao(){
            let avaliacao;
            if (this.notaMedia >= 7){
                 avaliacao = "Aprovado";
            }else{
                 avaliacao = "Reprovado";
            }

            return `${this.nomeCompleto} obteve nota ${this.notaMedia}, portanto está ${avaliacao}`;
        },

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        }
        
    }
}

const p1 = dadosBoletim("André", "Felipe", "Lógica", 7, 8);
const p2 = dadosBoletim("Romário", "Felipe", "Lógica", 3, 5);
const p3 = dadosBoletim("Maria", "Felipe", "Lógica", 4, 10);
console.log(p1.situacao);
console.log(p2.situacao);
console.log(p3.situacao);
