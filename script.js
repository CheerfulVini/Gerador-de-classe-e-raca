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

const dndClasses = {
    "phb": {
        Bárbaro: ["Path of the Berserker", "Path of the Totem Warrior"],
        Bardo: ["College of Lore", "College of Valor"],
        Clérigo: [
            "Knowledge Domain", "Life Domain", "Light Domain",
            "Nature Domain", "Tempest Domain", "Trickery Domain", "War Domain"
        ],
        Druida: ["Circle of the Land", "Circle of the Moon"],
        Guerreiro: ["Battle Master", "Champion", "Eldritch Knight"],
        Ladino: ["Arcane Trickster", "Assassin", "Thief"],
        Feiticeiro: ["Draconic Bloodline", "Wild Magic"],
        Bruxo: ["Archfey", "Fiend", "Great Old One"],
        Mago: [
            "School of Abjuration", "School of Conjuration", "School of Divination",
            "School of Enchantment", "School of Evocation", "School of Illusion",
            "School of Necromancy", "School of Transmutation"
        ],
        Monge: ["Way of the Four Elements", "Way of the Open Hand", "Way of Shadow"],
        Paladino: ["Oath of the Ancients", "Oath of Devotion", "Oath of Vengeance"],
        Ranger: ["Beast Master Conclave", "Hunter Conclave"]
    },

    "xhg": {
        Bárbaro: [
            "Path of the Ancestral Guardian",
            "Path of the Storm Herald",
            "Path of the Zealot"
        ],
        Bardo: ["College of Glamour", "College of Swords", "College of Whispers"],
        Clérigo: ["Forge Domain", "Grave Domain"],
        Druida: ["Circle of Dreams", "Circle of the Shepherd"],
        Guerreiro: ["Arcane Archer", "Cavalier", "Samurai"],
        Ladino: ["Inquisitive", "Mastermind", "Scout", "Swashbuckler"],
        Feiticeiro: ["Divine Soul", "Shadow Magic", "Storm Sorcery"],
        Bruxo: ["Celestial", "Hexblade"],
        Mago: ["School of War Magic"],
        Monge: ["Way of the Drunken Master", "Way of the Kensei", "Way of the Sun Soul"],
        Paladino: ["Oath of Conquest", "Oath of Redemption"],
        Ranger: [
            "Gloom Stalker Conclave",
            "Horizon Walker Conclave",
            "Monster Slayer Conclave"
        ]
    },

    "tce": {
        Artificer: ["Alchemist", "Armorer", "Artillerist", "Battle Smith"],
        Bárbaro: ["Path of the Beast", "Path of Wild Magic"],
        Bardo: ["College of Creation", "College of Eloquence"],
        Clérigo: ["Order Domain", "Peace Domain", "Twilight Domain"],
        Druida: ["Circle of Spores", "Circle of Stars", "Circle of Wildfire"],
        Guerreiro: ["Psi Warrior", "Rune Knight"],
        Ladino: ["Phantom", "Soulknife"],
        Feiticeiro: ["Aberrant Mind", "Clockwork Soul"],
        Bruxo: ["The Genie", "Fathomless"],
        Mago: ["School of Bladesinging", "Order of Scribes"],
        Monge: ["Way of Mercy", "Way of the Astral Self", "Way of the Ascendant Dragon"],
        Paladino: ["Oath of Glory", "Oath of the Watchers"],
        Ranger: ["Fey Wanderer", "Swarmkeeper"]
    },

    "scag": {
        Bárbaro: ["Path of the Battlerager"],
        Clérigo: ["Arcana Domain"],
        Monge: ["Way of the Long Death"],
        Paladino: ["Oath of the Crown"],
        Bruxo: ["Undying"]
    },

    "egw": {
        Guerreiro: ["Echo Knight"],
        Mago: ["School of Chronurgy", "School of Graviturgy"]
    },

    "rvn": {
        Bardo: ["College of Spirits"],
        Bruxo: ["Undead"]
    },

    "bigby": {
        Bárbaro: ["Path of the Giant"]
    },

    "fizban": {
        Monge: ["Way of the Ascendant Dragon"],
        Ranger: ["Drakewarden"]
    },

    "dgl": {
        Feiticeiro: ["Lunar Sorcery"]
    },

    "dgm": {
        Paladino: ["Oathbreaker"]
    }
};


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
    "Bruxo",
    "Clérigo",
    "Druida",
    "Feiticeiro",
    "Guerreiro",
    "Ladino",
    "Mago",
    "Monge",
    "Paladino",
    "Ranger"
];

const dinheiroClasse = [
    [5, 4, 10],
    [5, 4, 10],
    [4, 4, 10],
    [5, 4, 10],
    [2, 4, 10],
    [3, 4, 10],
    [5, 4, 10],
    [4, 4, 10],
    [4, 4, 10],
    [5, 4, 1],
    [5, 4, 10],
    [5, 4, 10]
]

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
    let din = document.querySelector('#dinheiro')
    let atributos = document.querySelector('#attr')

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
        document.getElementById("rvn"),
        document.getElementById("xhg"),    
        document.getElementById("tce"),    // Tasha
        document.getElementById("scag"),   // Sword Coast
        document.getElementById("egw"),    // Wildemount
        document.getElementById("bigby"),  // Bigby
        document.getElementById("fizban"), // Fizban
        document.getElementById("dmg")
    ];

    let livrosRacas = [];
    let livrosClasses = [];
    let numCheckbox = 0;

    // Coleta os livros permitidos para raças e classes
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            livrosRacas.push(dndRacas[i]);
            numCheckbox++;
        }

        // Verifica se o checkbox corresponde a um livro de classes
        const checkboxId = checkboxes[i].id;
        if (dndClasses[checkboxId]) {
            livrosClasses.push(checkboxId);
        }
    }

    // Verifica se ao menos um livro foi marcado
    if (numCheckbox === 0) {
        alert("Selecione ao menos um livro!");
        return;
    }

    // ESCOLHER RAÇA
    let livroRacaEscolhido = livrosRacas[getRandomInt(livrosRacas.length)];
    let racas = livroRacaEscolhido.racas;
    let racaEscolhida = racas[getRandomInt(racas.length)];

    // ESCOLHER CLASSE
    let classeCompleta = "";
    let subclasse = "";
    
    if (livrosClasses.length > 0) {
        // Escolhe um livro de classes aleatório
        let livroClasseEscolhido = livrosClasses[getRandomInt(livrosClasses.length)];
        let classesDoLivro = dndClasses[livroClasseEscolhido];
        
        // Pega todas as classes disponíveis neste livro
        let nomesClasses = Object.keys(classesDoLivro);
        
        // Escolhe uma classe aleatória
        let classeEscolhida = nomesClasses[getRandomInt(nomesClasses.length)];
        
        // Pega as subclasses desta classe
        let subclasses = classesDoLivro[classeEscolhida];
        
        // Escolhe uma subclass aleatória
        subclasse = subclasses[getRandomInt(subclasses.length)];
        
        classeCompleta = `${classeEscolhida} - ${subclasse}`;
    } else {
        // Fallback: usa uma classe básica se nenhum livro de classes foi selecionado
        let numclasse = getRandomInt(classes.length);
        classeCompleta = classes[numclasse];
    }

    // DINHEIRO (mantive sua lógica original)
    let numclasse = getRandomInt(12); // Ajustei para 12 porque dinheiroClasse tem 12 elementos
    let dinheiro = dinheiroClasse[numclasse];
    let dinheiroReal = 0;

    for (let index = 0; index < dinheiro[0]; index++) {
        dinheiroReal += getRandomInt(dinheiro[1]) + 1; // +1 porque getRandomInt(max) vai de 0 a max-1
    }

    dinheiroReal = dinheiroReal * dinheiro[2];

    // ATRIBUTOS (mantive sua lógica original)
    let attr = [0, 0, 0, 0, 0, 0];

    for (let i = 0; i < 6; i++) {
        let dados = [];
        for (let j = 0; j < 4; j++) {
            let dado = getRandomInt(6) + 1; // +1 para ir de 1 a 6
            dados[j] = dado;
        }

        // Soma os 3 maiores valores (descarta o menor)
        dados.sort((a, b) => b - a); // Ordena em ordem decrescente
        attr[i] = dados[0] + dados[1] + dados[2];
    }
    
    // ATUALIZA A TELA
    classe.innerText = 'Classe: ' + classeCompleta;
    raca.innerText = 'Raça: ' + racaEscolhida;
    din.innerText = 'Dinheiro: ' + dinheiroReal + " (" + dinheiro[0] + "d" + dinheiro[1] + " x " + dinheiro[2] + ")";
    atributos.innerText = `For(${attr[0]}) Des(${attr[1]}) Con(${attr[2]}) Int(${attr[3]}) Sab(${attr[4]}) Car(${attr[5]})`;
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
        document.getElementById("rvn"),
        document.getElementById("xhg"),    
        document.getElementById("tce"),    // Tasha
        document.getElementById("scag"),   // Sword Coast
        document.getElementById("egw"),    // Wildemount
        document.getElementById("bigby"),  // Bigby
        document.getElementById("fizban"), // Fizban
        document.getElementById("dmg")
    ];

    if(checkboxes[1].checked == true){
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
    }else{
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = true;
        }
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
