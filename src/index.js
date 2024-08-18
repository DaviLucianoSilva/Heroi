

class heroi{
    constructor (nome, idade, tipo){
        this.nome = nome
        this.idade = idade 
        this.tipo = tipo 
        
    }
    

    atacar(){ 
        let exibirAtaque = ""
        if (this.tipo === "mago" || this.tipo === "Mago" ){
            exibirAtaque = "Magia"
        }else if (this.tipo === "guerreiro" || this.tipo === "Guerreiro"){
            exibirAtaque = "Espada"
        }else if (this.tipo === "monge" || this.tipo === "Monge"){
            exibirAtaque = "Artes Marciais"
        }else if(this.tipo === "ninja" || this.tipo === "Ninja"){
            exibirAtaque = "shuriken"
        }else{
            console.error ("Erro")
            return 
        }

        console.log("O " + this.tipo + " Atacou usando " + exibirAtaque )
    }
    
}

let heroiDoCastelo = new heroi("Davi", 20, "Ninja")

heroiDoCastelo.atacar()