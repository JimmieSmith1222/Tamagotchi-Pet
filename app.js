class Tamagotchi {
    constructor(name, owner) {
        this.name = name;
        this.owner = owner;
        this.mood = "Brave";
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
        this.age = 0;
    }
}

const myTamagotchi = new Tamagotchi("Alice", "Jimmie")

