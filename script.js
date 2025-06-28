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

function preencherFicha() {
    const form = document.querySelector(".formMonstro");
    const dados = new FormData(form);

    const nome = dados.get("nome");
    const tamanho = dados.get("tamanho");
    const alinhamento = dados.get("alinhamento");
    const ca = dados.get("ca");
    const hp = dados.get("hp");
    const velocidade = dados.get("velocidade");

    const forca = dados.get("for");
    const des = dados.get("des");
    const con = dados.get("con");
    const inteli = dados.get("int");
    const sab = dados.get("sab");
    const car = dados.get("car");

    const salvaguardas = dados.get("salvaguardas");
    const pericias = dados.get("pericias");
    const sentidos = dados.get("sentidos");
    const linguas = dados.get("linguas");

    const hab1_nome = dados.get("habilidade1_nome");
    const hab1_desc = dados.get("habilidade1_desc");
    const hab2_nome = dados.get("habilidade2_nome");
    const hab2_desc = dados.get("habilidade2_desc");

    const acao1_nome = dados.get("acao1_nome");
    const acao1_desc = dados.get("acao1_desc");
    const acao2_nome = dados.get("acao2_nome");
    const acao2_desc = dados.get("acao2_desc");

    const reacao1_nome = dados.get("reacao_nome1");
    const reacao1_desc = dados.get("reacao_desc1");
    const reacao2_nome = dados.get("reacao_nome2");
    const reacao2_desc = dados.get("reacao_desc2");

    const monstroDiv = document.getElementById("monstro");
    monstroDiv.innerHTML = `
        <div>
            <h1>${nome}</h1>
            <strong>${tamanho}, ${alinhamento}</strong>
        </div>

        <div>
            <strong>Classe de armadura</strong> ${ca} <br>
            <strong>Pontos de vida</strong> ${hp} <br>
            <strong>Velocidade</strong> ${velocidade} m <br>
        </div>

        <div id="atributos">
            <div class="atributo"><strong>FOR</strong><p>${forca}</p></div>
            <div class="atributo"><strong>DES</strong><p>${des}</p></div>
            <div class="atributo"><strong>CON</strong><p>${con}</p></div>
            <div class="atributo"><strong>INT</strong><p>${inteli}</p></div>
            <div class="atributo"><strong>SAB</strong><p>${sab}</p></div>
            <div class="atributo"><strong>CAR</strong><p>${car}</p></div>
        </div>

        <div>
            <strong>Salvaguardas</strong> ${salvaguardas} <br>
            <strong>Perícias</strong> ${pericias} <br>
            <strong>Sentidos</strong> Percepção passiva ${sentidos} <br>
            <strong>Línguas</strong> ${linguas} <br>
        </div>

        <div id="habilidades">
            <strong>${hab1_nome}</strong> ${hab1_desc}<br>
            <strong>${hab2_nome}</strong> ${hab2_desc}

            <h1>Ações</h1>
            <strong>${acao1_nome}</strong> ${acao1_desc}<br>
            <strong>${acao2_nome}</strong> ${acao2_desc}

            <h1>Reações</h1>
            <strong>${reacao1_nome}</strong> ${reacao1_desc}<br>
            <strong>${reacao2_nome}</strong> ${reacao2_desc}
        </div>
    `;
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
    img.style.display = 'flex'
}

function seleciona() {
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

    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
    }
}

let aberto = false

function hamburger() {
    if(aberto == false){
        document.getElementById('hamburger').style.left = '0px'
        aberto = true
    }else{
        document.getElementById('hamburger').style.left = '-370px'
        aberto = false
    }
}
