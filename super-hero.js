class superHero {
//to initialize superHero's name use the constructor
    constructor(name){
        this.name = name;
    }
//two methods to set and get name
    getName(){
       return this.name;
    }
//setName() receives a name and assigns it to this.name
    setName(name){
        this.name = name;
    }
};
module.exports = superHero;