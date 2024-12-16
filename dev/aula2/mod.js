module.exports = class Carro {
    constructor(model, value){
        this.model = model;
        this.value = value;
        this.vel = 0;
    }

    acelerar(){
        return this.vel += 10;
    }
}
