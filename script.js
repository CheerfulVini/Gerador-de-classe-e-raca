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

  
const classes = [
    "Artificer: Alchemist", "Artificer: Armorer", "Artificer: Artillerist", "Artificer: Battle smith",
    "Bárbaro: Path of the Ancestral Guardian", "Bárbaro: Path of the Battlerager", 
    "Bárbaro: Path of the Beast", "Bárbaro: Path of the Berserker", "Bárbaro: Path of the Giant", 
    "Bárbaro: Path of the Storm Herald", "Bárbaro: Path of the Totem Warrior", "Bárbaro: Path of Wild Magic", 
    "Bárbaro: Path of the Zealot",
    "Bardo: College of Creation", "Bardo: College of Eloquence", "Bardo: College of Glamour", 
    "Bardo: College of Lore", "Bardo: College of Spirits", "Bardo: College of Swords", 
    "Bardo: College of Valor", "Bardo: College of Whispers",
    "Clérigo: Arcana Domain", "Clérigo: Death Domain", "Clérigo: Forge Domain", "Clérigo: Grave Domain", 
    "Clérigo: Knowledge Domain", "Clérigo: Life Domain", "Clérigo: Light Domain", "Clérigo: Nature Domain", 
    "Clérigo: Order Domain", "Clérigo: Peace Domain", "Clérigo: Tempest Domain", "Clérigo: Trickery Domain", 
    "Clérigo: Twilight Domain", "Clérigo: War Domain",
    "Druida: Circle of Dreams", "Druida: Circle of the Land", "Druida: Circle of the Moon", 
    "Druida: Circle of the Shepherd", "Druida: Circle of Spores", "Druida: Circle of Stars", 
    "Druida: Circle of Wildfire",
    "Guerreiro: Arcane Archer", "Guerreiro: Banneret", "Guerreiro: Battle Master", "Guerreiro: Cavalier", 
    "Guerreiro: Champion", "Guerreiro: Echo Knight", "Guerreiro: Eldritch Knight", "Guerreiro: Psi Warrior", 
    "Guerreiro: Rune Knight", "Guerreiro: Samurai",
    "Monge: Way of Mercy", "Monge: Way of the Ascendant Dragon", "Monge: Way of the Astral Self", 
    "Monge: Way of the Drunken Master", "Monge: Way of the Four Elements", "Monge: Way of the Kensei", 
    "Monge: Way of the Long Death", "Monge: Way of the Open Hand", "Monge: Way of Shadow", 
    "Monge: Way of the Sun Soul",
    "Paladino: Oath of the Ancients", "Paladino: Oath of Conquest", "Paladino: Oath of the Crown", 
    "Paladino: Oath of Devotion", "Paladino: Oath of Glory", "Paladino: Oath of Redemption", 
    "Paladino: Oath of Vengeance", "Paladino: Oath of the Watchers", "Paladino: Oathbreaker",
    "Ranger: Beast Master Conclave", "Ranger: Drakewarden", "Ranger: Fey Wanderer", 
    "Ranger: Gloom Stalker Conclave", "Ranger: Horizon Walker Conclave", "Ranger: Hunter Conclave", 
    "Ranger: Monster Slayer Conclave", "Ranger: Swarmkeeper",
    "Ladino: Arcane Trickster", "Ladino: Assassin", "Ladino: Inquisitive", "Ladino: Mastermind", 
    "Ladino: Phantom", "Ladino: Scout", "Ladino: Soulknife", "Ladino: Swashbuckler", "Ladino: Thief",
    "Feiticeiro: Aberrant Mind", "Feiticeiro: Clockwork Soul", "Feiticeiro: Draconic Bloodline", 
    "Feiticeiro: Divine Soul", "Feiticeiro: Lunar Sorcery", "Feiticeiro: Shadow Magic", 
    "Feiticeiro: Storm Sorcery", "Feiticeiro: Wild Magic",
    "Bruxo: Archfey", "Bruxo: Celestial", "Bruxo: Fathomless", "Bruxo: Fiend", "Bruxo: The Genie", 
    "Bruxo: Great Old One", "Bruxo: Hexblade", "Bruxo: Undead", "Bruxo: Undying",
    "Mago: School of Abjuration", "Mago: School of Bladesinging", "Mago: School of Chronurgy", 
    "Mago: School of Conjuration", "Mago: School of Divination", "Mago: School of Enchantment", 
    "Mago: School of Evocation", "Mago: School of Graviturgy", "Mago: School of Illusion", 
    "Mago: School of Necromancy", "Mago: Order of Scribes", "Mago: School of Transmutation", 
    "Mago: School of War Magic"
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
    
    let num1 = getRandomInt(118)
    let num2 = getRandomInt(81)
    
    classe.innerText = 'Classe: ' + classes[num1];
    raca.innerText = 'Raça: ' + racas[num2]
}
