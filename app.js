class Tamagotchi {
    constructor(name, owner) {
        this.name = name;
        this.owner = owner;
        this.mood = "Brave";
        this.hunger = 8;
        this.sleepiness = 8;
        this.boredom = 8;
        this.age = 0;
    }

    feedPet() {
        this.hunger -= 2;
        if (this.hunger < 0) {
            this.hunger = 0;
        }
    }

    turnOffLights() {
        this.sleepiness -= 3;
        if (this.sleepiness < 0) {
            this.sleepiness = 0;
        }
    }

    playWithPet() {
        this.boredom -= 2;
        if (this.boredom < 0) {
            this.boredom = 0;
        }
    }
}

// set prompt at the bottom
const petName = prompt('Name your pet');

const myTamagotchi = new Tamagotchi(petName, "Jimmie");

document.getElementById("tamagotchi-name").innerText = myTamagotchi.name;

const feedPetButton = document.getElementById("feedPetButton");
feedPetButton.addEventListener("click", () => {
    myTamagotchi.feedPet();
    document.getElementById("hungerValue").textContent = myTamagotchi.hunger;
});

const turnOffLightsButton = document.getElementById("turnOffLightsButton");
turnOffLightsButton.addEventListener("click", () => {
    myTamagotchi.turnOffLights();
    document.getElementById("sleepinessValue").textContent = myTamagotchi.sleepiness;
});

const playWithPetButton = document.getElementById("playWithPetButton");
playWithPetButton.addEventListener("click", () => {
    myTamagotchi.playWithPet();
    document.getElementById("boredomValue").textContent = myTamagotchi.boredom;
});

const updateAge = () => {
    myTamagotchi.age += 1;
    document.getElementById("ageValue").textContent = myTamagotchi.age;
};

setInterval(updateAge, 10000);

const updateHunger = () => {
    myTamagotchi.hunger += 1;
    document.getElementById("hungerValue").textContent = myTamagotchi.hunger;
};

setInterval(updateHunger, 5000);

const updateSleepiness = () => {
    myTamagotchi.sleepiness += 1;
    document.getElementById("sleepinessValue").textContent = myTamagotchi.sleepiness;
};

setInterval(updateSleepiness, 7000);

const updateBoredom = () => {
    myTamagotchi.boredom += 1;
    document.getElementById("boredomValue").textContent = myTamagotchi.boredom;
};

setInterval(updateBoredom, 4000);