class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome; this.idade = idade; this.tipo = tipo;/*guerreiro, mago, monge, ninja*/
    }
}

let heroiEscolhido = new heroi("Drack", 26, "guerreiro");
let ataque ="";

/**se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken) */
switch(heroiEscolhido.tipo){
    case ("guerreiro"):{
        ataque = "espada";
        console.log(`o ${heroiEscolhido.tipo} ${heroiEscolhido.nome} atacou usando ${ataque}`)
        break;
    }
    case ("mago"):{
        ataque = "magia";
        console.log(`o ${heroiEscolhido.tipo} ${heroiEscolhido.nome} atacou usando ${ataque}`)
        break;
    }
    case ("monje"):{
        ataque = "artes marciais";
        console.log(`o ${heroiEscolhido.tipo} ${heroiEscolhido.nome} atacou usando ${ataque}`)
        break;
    }
    case ("ninja"):{
        ataque = "shuriken";
        console.log(`o ${heroiEscolhido.tipo} ${heroiEscolhido.nome} atacou usando ${ataque}`)
        break

    }
    default: "Tipo nao encontrado";
    
}