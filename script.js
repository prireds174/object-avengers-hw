console.log('JS Loaded')

const ironMan = {
    regularName: 'Anthony Edward "Tony" Stark',
    abilities: ['genius-level intellect', 'proficient scientist and engineer', 'powered armor suit'],
    marvelMovieAppearances: {
        ironMan: true,
        theHulk: true,
        ironManTwo: true,
        thor: false,
        captainAmerica: false,
        theAvengers: true,
        ironManThree: true,
        thorTwo: false,
        captainAmericaTwo: false,
        guardiansOfTheGalaxy: false,
        avengersTwo: true,
        antMan: false,
        captainAmericaThree: true,
        doctorStrange: false,
        guardiansOfTheGalaxyTwo: false,
        spiderManHomecoming: false,
        thorThree: false,
        blackPanther: false,
        avengersThree: true
    },
    jarvisAreYouThere: () => {
        console.log('At your service, sir')
    }
}

//1. 
console.log(ironMan.abilities[2])
//2.
for (let i = 0; i < ironMan.abilities.length; i++) {
    console.log(ironMan.abilities[i])
}
//3.
console.log(ironMan.marvelMovieAppearances.spiderManHomecoming)
//4.
ironMan.marvelMovieAppearances.spiderManHomecoming = true
console.log(ironMan.marvelMovieAppearances.spiderManHomecoming)
//5.
ironMan.jarvisAreYouThere()

//Assembling other Avengers
//Create an object for captainAmerica such that...

//The following code logs 'Captain America'

const captainAmerica = {
    abilities: ['slowed aging', 'accelerated healing', 'peak human strength'],
    aliases: {
        regularName: "Steve Rogers",
        superheroName: "Captain America",
    },
    sayPhrase : () => {
        console.log('I can do this all DAY!')
    }
}

console.log(captainAmerica.aliases.superheroName)

//The following code logs 'peak human strength'

console.log(captainAmerica.abilities[2])

//The following code logs 'i can do this all day'

console.log(captainAmerica.sayPhrase())

//Create a data structure for blackWidow such that...

const blackWidow = {
    aliases: {
        realName: "Natalia Alianovna Romanova",
        otherNotableAliases: ['Nat', 'Natalie Rushman']
    }
}

//The following code logs 'Natalia Alianovna Romanova'

console.log(blackWidow.aliases.realName)

//The following code logs 'Natalie Rushman'

console.log(blackWidow.aliases.otherNotableAliases[1])

//Given the following array, loop through it and log just their name. 

const theAvengers = [
    { name: 'Tony Stark', superheroName: 'Iron Man'},
    { name: 'Steve Rogers', superheroName: 'Captain America' },
    { name: 'Bruce Banner', superheroName: 'The Hulk'},
    { name: 'Thor' },
    { name: 'Natasha Romanoff', superheroName: 'Black Widow' },
    { name: 'Clint Barton', superheroName: 'Hawkeye' }
  ]

  for (let i = 0; i < theAvengers.length; i++) {
      console.log(theAvengers [i].name)
  }

  //Given the following array of arrays, use two loops to loop over each inner array and list all the mcu movies.

  const mcuMovies = [
    ['ant-man', 'ant-man and the wasp'],
    ['the avengers', 'avengers: age of ultron', 'avengers: infinity war', 'avengers: end game'],
    ['black panther'],
    ['captain america: the first avenger', 'captain america: the winter soldier', 'captain america: civil war'],
    ['doctor strange'],
    ['guardians of the galaxy', 'guardians of the galaxy vol.2'],
    ['the hulk'],
    ['iron man', 'iron man 2', 'iron man 3'],
    ['spiderman: homecoming'],
    ['thor', 'thor: the dark world', 'thor: ragnarok']
  ]

  for (let i = 0; i < mcuMovies.length; i++){
      for(let m = 0; m < mcuMovies[i].length; m++){
        console.log(mcuMovies[i][m]);
      }
  }

//Other Objects - Instruments
//Switching gears, let's look at some instrument data!

const instruments = {
  banjo: ["1920 gibson", "deering", "washburn"],
  guitar: {
    acoustic: ["martin", "taylor", "santa cruz", "gibson"],
    electric: ["fender Strat", "telecaster", "PRS", "languedoc"],
    nylon: ["baldwin", "cordoba"]
  },
  mandolin: ["eastman", "weber", "collings"]
}
//Given the above object...

//Log all of the following:

//telecaster
console.log(instruments.guitar.electric[1])
//santa cruz
console.log(instruments.guitar.acoustic[2])
//washburn
console.log(instruments.banjo[2])
//weber
console.log(instruments.mandolin[1])
//Loop through all the electric guitars and log them
for (let i = 0; i < instruments.guitar.electric.length; i++) {
    console.log(instruments.guitar.electric[i])
}
//Add a vocals property to the object that includes a list of your favorite singers
instruments.vocals = ["The Killers", "Sevdaliza", "Bad Bunny"]
console.log(instruments.vocals)
