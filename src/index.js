class heroi{
    constructor (nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade 
        this.tipo = tipo 
        this.ataque = ataque
        
    }
    

    atacar(){
console.log("O " + this.tipo + " Atacou usando " + this.ataque)
    }
    
}

let heroiDoCastelo = new heroi("Davi", 20, "Ninja", "Shuriken")

heroiDoCastelo.atacar()