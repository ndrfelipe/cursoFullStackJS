// 705.484.450-52 070.987.720-03
class ValidaCPF{
    constructor(cpf){
        Object.defineProperty(this, "cpfLimpo",{
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpf.replace(/\D+/g, '')
        });
    }

    valida(){
        if(!this.cpfLimpo) return "Insira um valor. ";
        if(typeof this.cpfLimpo !== "string") return "Insira uma String";
        if(this.cpfLimpo.length !== 11) return "Insira um CPF com 11 dígitos";
        if(this.isSequency()) return "Sequências não passarão!";
        
        const cpfNovo = this.CreateNewCPF();
        return cpfNovo == this.cpfLimpo ? "CPF é válido": "CPF não é Válido";
    }

    isSequency(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    CreateNewCPF(){
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const firstDigito = ValidaCPF.CreateDigito(cpfParcial);
        const secondDigito = ValidaCPF.CreateDigito(cpfParcial + firstDigito);

        return cpfParcial + firstDigito + secondDigito;
    }

    static CreateDigito(cpfParcial){
        let total = 0;
        let reverse = cpfParcial.length + 1;

        for(let stringNumeric of cpfParcial){
            total += reverse * Number(stringNumeric);
            reverse--;
        };
        
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    
};

const validaCPF = new ValidaCPF("130.657.094-81");
console.log(validaCPF.valida())