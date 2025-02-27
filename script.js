const racas = [
    "Dragonborn", "Dwarf", "Elf", "Gnome", "Half Elf", "Halfling", "Half Orc", "Humano", 
    "Tiefling", "Aarakokra", "Aasimar", "Genasi (Rola Um D4)", "Bugbear", "Centauro", 
    "Changeling", "Deep Gnome", "Duegar", "Eladrin", "Fairy", "Firbolg", "Githyanki", 
    "Githzerai", "Goblin", "Goliath", "Harengon", "Hobgoblin", "Kenku", "Kobold", 
    "Lizardfolk", "Minotaur", "Orc", "Satyr", "Sea Elf", "Shadar-Kai", "Shifter", 
    "Tabaxi", "Tortle", "Triton", "Yuan-Ti", "Kender", "Astral Elf", "Autognome", 
    "Giff", "Hadozee", "Plasmoid", "Thri-Kreen", "Owlin", "Leolin", "Kalashtar", 
    "Warforged", "Verdan", "Loxodon", "Simic Hybrid", "Vedalken", "Locathah", 
    "Cervan", "Corvum", "Gallus", "Hedge", "Jerbeen", "Lumas", "Mapach", "Raptor", 
    "Strig", "Vulpin", "Grung", "Aetherborn", "Aven", "Khenra", "Kor", "Merfolk", 
    "Naga", "Siren", "Vampire", "Dhamphir", "Hexblood", "Reborn", "Glitchling", 
    "Rabbitfolk", "Revenant", "Viashino"
];

const dndRacas = [
    { livro: "Livro do Jogador", racas: [
        "Draconato", "Anão", "Elfo", "Gnomo", "Meio-Elfo", "Halfling",
        "Meio-Orc", "Humano", "Tiefling"
    ]},
    { livro: "Mordenkainen Multiverso", racas: [
        "Aarakocra", "Aasimar", "Genasi", "Bugbear", "Centauro", "Metamorfo", "Gnomo Profundo",
        "Duergar", "Eladrin", "Fada", "Firbolg", "Githyanki", "Githzerai", "Goblin", "Goliath",
        "Harengon", "Hobgoblin", "Kenku", "Kobold", "Homem-Lagarto", "Minotauro", "Orc", "Sátiro",
        "Elfo do Mar", "Shadar-kai", "Troca-Peles", "Tabaxi", "Tortle", "Tritão", "Yuan-ti"
    ]},
    { livro: "Dragonlance", racas: ["Kender"] },
    { livro: "Spelljammer", racas: [
        "Elfo Astral", "Autognomo", "Giff", "Hadozee", "Plasmóide", "Thri-kreen"
    ]},
    { livro: "Strixhaven", racas: ["Corujin"] },
    { livro: "Odisséias Míticas de Theros", racas: ["Leonino", "Kalashtar", "Forjado Bélico"] },
    { livro: "Aquisições Incorporadas", racas: ["Verdan"] },
    { livro: "Guia dos Mestres de Ravnica", racas: ["Loxodon", "Híbrido Símico", "Vedalken"] },
    { livro: "Locathah Rising", racas: ["Locathah"] },
    { livro: "Humblewood", racas: [
        "Cervan", "Corvum", "Gallus", "Hedge", "Jerbeen", "Lumas", "Mapach", "Raptor",
        "Strig", "Vulpin"
    ]},
    { livro: "One Grung Above", racas: ["Grung"] },
    { livro: "Plano Shift", racas: [
        "Aetherborn", "Aven", "Khenra", "Kor", "Tritão", "Naga", "Sereia", "Vampiro"
    ]},
    { livro: "Ravenloft", racas: ["Dhampir", "Hexblood", "Renascido"] }
];

  
const classes = [
    "Artificer",
    "Bárbaro",
    "Bardo",
    "Clérigo",
    "Druida",
    "Guerreiro",
    "Monge",
    "Paladino",
    "Ranger",
    "Ladino",
    "Feiticeiro",
    "Bruxo",
    "Mago"
  ];

function getRandomInt(max) {
    return Math.floor(Math.random() * (max));
}
  
let chance = getRandomInt(10)
console.log(chance)

if (chance == 1) {
    imagem = document.querySelector('#sidebar')
    imagem.style.display = 'block'
}

function gerar(){
    
    let classe = document.querySelector('#classe')
    let raca = document.querySelector('#raca')

    var checkboxes = [
        document.getElementById("phb"),
        document.getElementById("mkm"),
        document.getElementById("dgl"),
        document.getElementById("spj"),
        document.getElementById("stx"),
        document.getElementById("thr"),
        document.getElementById("aqi"),
        document.getElementById("gmr"),
        document.getElementById("lcr"),
        document.getElementById("hmb"),
        document.getElementById("oga"),
        document.getElementById("pls"),
        document.getElementById("rvn")
    ];

    let numCheckbox = 0;
    let livros = []

    for (let index = 0; index < checkboxes.length; index++) {
        if (checkboxes[index].checked == true){
            livros.push(dndRacas[index])
            numCheckbox++
        }
    }

    livro = livros[getRandomInt(numCheckbox)]['racas']
    racaEscolhida = livro[getRandomInt(livro.length)]

    console.log(livros)

    console.log(racaEscolhida);
    
    let numclasse = getRandomInt(13)
    classe.innerText = 'Classe: ' + classes[numclasse];
    raca.innerText = 'Raça: ' + racaEscolhida
}

function virus(){
    let img = document.querySelector('#virus')
    img.style.display = 'block'
}
