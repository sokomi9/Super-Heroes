const superHero = require("./super-hero")
const batman = new superHero("Batman");
console.log(batman.getName());
batman.setName("Superman");
console.log(batman.getName());
batman.setName("Bruce Wayne");
console.log(batman.getName());

const greenlantern = new superHero("Green Lantern");
console.log(greenlantern.getName());
