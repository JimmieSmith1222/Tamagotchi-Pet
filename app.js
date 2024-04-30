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
    if (myTamagotchi.age === 5) {
        document.getElementById("tamagotchi-image").style.display = "none";
        document.getElementById("second-age-tama").style.display = "block";
    }
    if (myTamagotchi.age === 8) {
        document.getElementById("tamagotchi-image").style.display = "none";
        document.getElementById("second-age-tama").style.display = "none";
        document.getElementById("third-age-tama").style.display = "block";
    }

    checkPetStatus();
};

setInterval(updateAge, 10000);

const updateHunger = () => {
    if (!gameOver) {
        myTamagotchi.hunger += 1;
        document.getElementById("hungerValue").textContent = myTamagotchi.hunger;
        checkPetStatus();
    } else {
        clearInterval(updateHungerInterval);
    }
};

const updateSleepiness = () => {
    if (!gameOver) {
        myTamagotchi.sleepiness += 1;
        document.getElementById("sleepinessValue").textContent = myTamagotchi.sleepiness;
        checkPetStatus();
    } else {
        clearInterval(updateSleepinessInterval);
    }
};

const updateBoredom = () => {
    if (!gameOver) {
        myTamagotchi.boredom += 1;
        document.getElementById("boredomValue").textContent = myTamagotchi.boredom;
        checkPetStatus();
    } else {
        clearInterval(updateBoredomInterval);
    }
};

const updateHungerInterval = setInterval(updateHunger, 5000);
const updateSleepinessInterval = setInterval(updateSleepiness, 7000);
const updateBoredomInterval = setInterval(updateBoredom, 4000);

let gameOver = false;

const stopPetAnimation = () => {
    document.getElementById("tamagotchi-image").style.animationPlayState = "paused";
    document.getElementById("second-age-tama").style.animationPlayState = "paused";
    document.getElementById("third-age-tama").style.animationPlayState = "paused";
  };
  
  checkPetStatus = () => {
    if (!gameOver && (myTamagotchi.hunger >= 10 || myTamagotchi.sleepiness >= 10 || myTamagotchi.boredom >= 10)) {
      gameOver = true;
      stopPetAnimation();
      if (confirm("Nooooooo! Good thing you can try again huh?")) {
        document.location.reload();
      }
    }
  };