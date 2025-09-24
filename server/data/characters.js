const characterData = [
  {
    id: 1,
    slug: "hulk",
    name: "Hulk",
    alias: "Bruce Banner",
    role: "Vanguard",
    affiliations: ["Avengers"],
    image: "/images/heroes/hulk.jpg",
    description: "Smashes through frontlines with huge health and crowd control.",
    infoUrl: "https://marvelrivals.fandom.com/wiki/Hulk"
  },
  {
    id: 2,
    slug: "captain-america",
    name: "Captain America",
    alias: "Steve Rogers",
    role: "Vanguard",
    affiliations: ["Avengers"],
    image: "/images/heroes/captain-america.jpg",
    description: "Shield-bearing leader who protects teammates and anchors objectives.",
    infoUrl: "https://marvelrivals.fandom.com/wiki/Captain_America"
  },
  {
    id: 3,
    slug: "magneto",
    name: "Magneto",
    alias: "Erik Lehnsherr",
    role: "Vanguard",
    affiliations: ["X-Men", "Brotherhood"],
    image: "/images/heroes/magneto.jpg",
    description: "Metal-bending tank that controls space with barriers and pulls.",
    infoUrl: "https://marvelrivals.fandom.com/wiki/Magneto"
  },
  {
    id: 4,
    slug: "peni-parker",
    name: "Peni Parker",
    alias: "Peni Parker",
    role: "Vanguard",
    affiliations: ["Spider-Verse"],
    image: "/images/heroes/peni-parker.jpg",
    description: "SP//dr mech sets traps and fortifies points with webs and drones.",
    infoUrl: "https://marvelrivals.fandom.com/wiki/Peni_Parker"
  },
  {
    id: 5,
    slug: "the-thing",
    name: "The Thing",
    alias: "Ben Grimm",
    role: "Vanguard",
    affiliations: ["Fantastic Four"],
    image: "/images/heroes/the-thing.jpg",
    description: "Rock-solid brawler with peel and displacement to guard allies.",
    infoUrl: "https://marvelrivals.fandom.com/wiki/The_Thing"
  },
  {
    id: 6,
    slug: "thor",
    name: "Thor",
    alias: "Thor Odinson",
    role: "Vanguard",
    affiliations: ["Avengers", "Asgard"],
    image: "/images/heroes/thor.jpg",
    description: "Hammer-throwing frontliner with burst, stuns, and team auras.",
    infoUrl: "https://marvelrivals.fandom.com/wiki/Thor"
  },
  {
    id: 7,
    slug: "iron-man",
    name: "Iron Man",
    alias: "Tony Stark",
    role: "Duelist",
    affiliations: ["Avengers"],
    image: "/images/heroes/iron-man.jpg",
    description: "Mobile ranged DPS who pokes with repulsors and secures picks.",
    infoUrl: "https://marvelrivals.fandom.com/wiki/Iron_Man"
  },
  {
    id: 8,
    slug: "spider-man",
    name: "Spider-Man",
    alias: "Peter Parker",
    role: "Duelist",
    affiliations: ["Avengers", "Spider-Verse"],
    image: "/images/heroes/spider-man.jpg",
    description: "Web-slinging flanker with pulls, stuns, and high mobility.",
    infoUrl: "https://marvelrivals.fandom.com/wiki/Spider-Man"
  },
  {
    id: 9,
    slug: "wolverine",
    name: "Wolverine",
    alias: "Logan",
    role: "Duelist",
    affiliations: ["X-Men"],
    image: "/images/heroes/wolverine.jpg",
    description: "Ferocious dive DPS with sustain and lethal gap-closing.",
    infoUrl: "https://marvelrivals.fandom.com/wiki/Wolverine"
  },
  {
    id: 10,
    slug: "storm",
    name: "Storm",
    alias: "Ororo Munroe",
    role: "Duelist",
    affiliations: ["X-Men"],
    image: "/images/heroes/storm.jpg",
    description: "Storm-rider with aerial control, zoning, and team speed boosts.",
    infoUrl: "https://marvelrivals.fandom.com/wiki/Storm"
  },
  {
    id: 11,
    slug: "hela",
    name: "Hela",
    alias: "Hela",
    role: "Duelist",
    affiliations: ["Asgard"],
    image: "/images/heroes/hela.jpg",
    description: "Long-range sorceress who snipes, drains, and commands the dead.",
    infoUrl: "https://marvelrivals.fandom.com/wiki/Hela"
  },
  {
    id: 12,
    slug: "black-widow",
    name: "Black Widow",
    alias: "Natasha Romanoff",
    role: "Duelist",
    affiliations: ["Avengers"],
    image: "/images/heroes/black-widow.jpg",
    description: "Stealthy skirmisher with gadgets and burst pick potential.",
    infoUrl: "https://marvelrivals.fandom.com/wiki/Black_Widow"
  },
  {
    id: 13,
    slug: "hawkeye",
    name: "Hawkeye",
    alias: "Clint Barton",
    role: "Duelist",
    affiliations: ["Avengers"],
    image: "/images/heroes/hawkeye.jpg",
    description: "Precision archer: utility arrows plus consistent poke damage.",
    infoUrl: "https://marvelrivals.fandom.com/wiki/Hawkeye"
  },
  {
    id: 14,
    slug: "punisher",
    name: "The Punisher",
    alias: "Frank Castle",
    role: "Duelist",
    affiliations: ["Street-Level"],
    image: "/images/heroes/punisher.jpg",
    description: "Hard-hitting gunner who excels at picks and lane control.",
    infoUrl: "https://marvelrivals.fandom.com/wiki/The_Punisher"
  },
  {
    id: 15,
    slug: "phoenix",
    name: "Phoenix",
    alias: "Jean Grey",
    role: "Duelist",
    affiliations: ["X-Men"],
    image: "/images/heroes/phoenix.jpg",
    description: "Fiery AoE duelist with mobility, telekinesis, and combos.",
    infoUrl: "https://marvelrivals.fandom.com/wiki/Phoenix"
  },
  {
    id: 16,
    slug: "magik",
    name: "Magik",
    alias: "Illyana Rasputina",
    role: "Duelist",
    affiliations: ["X-Men"],
    image: "/images/heroes/magik.jpg",
    description: "Portal-hopping blade duelist with burst and battlefield control.",
    infoUrl: "https://marvelrivals.fandom.com/wiki/Magik"
  },
  {
    id: 17,
    slug: "loki",
    name: "Loki",
    alias: "Loki Laufeyson",
    role: "Strategist",
    affiliations: ["Asgard"],
    image: "/images/heroes/loki.jpg",
    description: "Illusionist support who heals, deceives, and sets up picks.",
    infoUrl: "https://marvelrivals.fandom.com/wiki/Loki"
  },
  {
    id: 18,
    slug: "luna-snow",
    name: "Luna Snow",
    alias: "Seol Hee",
    role: "Strategist",
    affiliations: ["Agents of Atlas"],
    image: "/images/heroes/luna-snow.jpg",
    description: "Pop idol with massive healing zones and team utility.",
    infoUrl: "https://marvelrivals.fandom.com/wiki/Luna_Snow"
  },
  {
    id: 19,
    slug: "mantis",
    name: "Mantis",
    alias: "Mantis",
    role: "Strategist",
    affiliations: ["Guardians of the Galaxy"],
    image: "/images/heroes/mantis.jpg",
    description: "Empathic support with strong heals and clutch disables.",
    infoUrl: "https://marvelrivals.fandom.com/wiki/Mantis"
  },
  {
    id: 20,
    slug: "invisible-woman",
    name: "Invisible Woman",
    alias: "Susan Storm Richards",
    role: "Strategist",
    affiliations: ["Fantastic Four"],
    image: "/images/heroes/invisible-woman.jpg",
    description: "Shields, barriers, and crowd control to enable her team.",
    infoUrl: "https://marvelrivals.fandom.com/wiki/Invisible_Woman"
  },
  {
    id: 21,
    slug: "adam-warlock",
    name: "Adam Warlock",
    alias: "Adam Warlock",
    role: "Strategist",
    affiliations: ["Guardians of the Galaxy"],
    image: "https://r.res.easebar.com/pic/20241120/422a024f-df1e-4bfc-ac57-00140e43c36d.png",
    description: "Cosmic support who buffs damage and rescues allies.",
    infoUrl: "https://marvelrivals.fandom.com/wiki/Adam_Warlock"
  },
  {
    id: 22,
    slug: "cloak-and-dagger",
    name: "Cloak & Dagger",
    alias: "Tyrone Johnson & Tandy Bowen",
    role: "Strategist",
    affiliations: ["Street-Level"],
    image: "https://r.res.easebar.com/pic/20241204/2b32f579-b80c-4da6-8085-a1d9bfb3d2bb.png",
    description: "Duo support: darkness control, teleports, and burst heals.",
    infoUrl: "https://marvelrivals.fandom.com/wiki/Cloak_%26_Dagger"
  },
  {
    id: 23,
    slug: "rocket-raccoon",
    name: "Rocket Raccoon",
    alias: "Rocket Raccoon",
    role: "Strategist",
    affiliations: ["Guardians of the Galaxy"],
    image: "/images/heroes/rocket-raccoon.jpg",
    description: "Techy support with bouncing heals, revives, and poke.",
    infoUrl: "https://marvelrivals.fandom.com/wiki/Rocket_Raccoon"
  },
  {
    id: 24,
    slug: "jeff-the-land-shark",
    name: "Jeff the Land Shark",
    alias: "Jeff",
    role: "Strategist",
    affiliations: ["Avengers (adjacent)"],
    image: "/images/heroes/jeff.jpg",
    description: "Adorable healer with beams, bubbles, and sneaky mobility.",
    infoUrl: "https://marvelrivals.fandom.com/wiki/Jeff_the_Land_Shark"
  }
];

export default characterData;