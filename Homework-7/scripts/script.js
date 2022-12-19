class Tamagotchi {
    constructor(name, health, saturation, strength, happiness, purity) {
        this.name = name
        this.health = health
        this.saturation = saturation
        this.strength = strength
        this.happiness = happiness
        this.purity = purity
    }

    feed() {
        health += 5;
        saturation += 15;
        strength += 5;
        happiness += 5;
        purity -= 5;

        return { health, saturation, strength, happiness, purity }
    }

     drink() {
        health += 5;
        strength += 5;
        happiness += 5;

        return { health, strength, happiness }
    }

    study() {
        health -= 5;
        saturation -= 5;
        strength -= 5;
        happiness -= 10;
        purity -= 5;

        return { health, saturation, strength, happiness, purity }
    }

    play() {
        health -= 5;
        saturation -= 5;
        strength -= 5;
        happiness += 15;

        return { health, saturation, strength, happiness }
    }

    walk() {
        health += 15;
        saturation -= 5;
        strength -= 5;
        happiness += 5;
        purity -= 5;

        return { health, saturation, strength, happiness, purity }
    }

    sleep() {
        health += 15;
        saturation -= 5;
        strength += 5;
        happiness -= 5;
        purity -= 5;

        return { health, saturation, strength, happiness, purity }
    }

    treat() {
        health += 10;
        strength += 5;
        happiness -= 5;

        return { health, strength, happiness }
    }

    bathe() {
        happiness += 10;
        purity += 5;

        return { health, strength, happiness }
    }
}

const tamagotchiGosha = new Tamagotchi('Гриша', 100, 100, 100, 100, 100);

const tamagotchiImg = document.querySelector('.tamagocthi-img');

// Section Properties
const tamagotchiFeed = document.querySelector('.item-feed');
const tamagotchiDrink = document.querySelector('.item-drink');
const tamagotchiStudy = document.querySelector('.item-study');
const tamagotchiPlay = document.querySelector('.item-play');
const tamagotchiWalk = document.querySelector('.item-walk');
const tamagotchiSleep = document.querySelector('.item-sleep');
const tamagotchiTreat = document.querySelector('.item-treat');
const tamagotchiBathe = document.querySelector('.item-bathe');

// Section Characteristics
const tamagotchiName = document.querySelector('.item-name');
const tamagotchiHealth = document.querySelector('.item-health');
const tamagotchiSaturation = document.querySelector('.item-saturation');
const tamagotchiStrength = document.querySelector('.item-strength');
const tamagotchiHappiness = document.querySelector('.item-happiness');
const tamagotchiPuring = document.querySelector('.item-purity');

// GAME OVER
const h2 = document.querySelector('.h2');

// Color HP
const colorHealth = document.querySelector('.item-health');
const colorSaturation = document.querySelector('.item-saturation');
const colorStrength = document.querySelector('.item-strength');
const colorHappiness = document.querySelector('.item-happiness');
const colorPurity = document.querySelector('.item-purity');

// Numbers by Characteristics
let health = 100;
let saturation = 100;
let strength = 100;
let happiness = 100;
let purity = 100;

showTextContent()

// Color style for HP
colorHealth.className = 'health-scale-green'
colorSaturation.className = 'health-scale-green'
colorStrength.className = 'health-scale-green'
colorHappiness.className = 'health-scale-green'
colorPurity.className = 'health-scale-green'

h2.style.display = 'none'

tamagotchiFeed.style.display = 'block'

setInterval(() => {
    if (0 < health) {
        // В залежності стільки хп в тамаогочі, змінювати картинку
        if (100 >= health || 100 >= saturation || 100 >= strength || 100 >= happiness || 100 >= purity) {
            colorHealth.className = 'health-scale-green'
            colorSaturation.className = 'health-scale-green'
            colorStrength.className = 'health-scale-green'
            colorHappiness.className = 'health-scale-green'
            colorPurity.className = 'health-scale-green'
        }
        if (90 >= health || 90 >= saturation || 90 >= strength || 90 >= happiness || 90 >= purity) {
            tamagotchiImg.setAttribute('src', './images/90.png')
        }
        if (80 >= health || 80 >= saturation || 80 >= strength || 80 >= happiness || 80 >= purity) {
            tamagotchiImg.setAttribute('src', './images/80.png')
            if (80 >= health) {
                colorHealth.className = 'health-scale-yellow'
            }
            if (80 >= saturation) {
                colorSaturation.className = 'health-scale-yellow'
            }
            if (80 >= strength) {
                colorStrength.className = 'health-scale-yellow'
            }
            if (80 >= happiness) {
                colorHappiness.className = 'health-scale-yellow'
            }
            if (80 >= purity) {
                colorPurity.className = 'health-scale-yellow'
            }
        }
        if (70 >= health || 70 >= saturation || 70 >= strength || 70 >= happiness || 70 >= purity) {
            tamagotchiImg.setAttribute('src', './images/70.png')
        }
        if (60 >= health || 60 >= saturation || 60 >= strength || 60 >= happiness || 60 >= purity) {
            tamagotchiImg.setAttribute('src', './images/60.png')
        }
        if (50 >= health || 50 >= saturation || 50 >= strength || 50 >= happiness || 50 >= purity) {
            tamagotchiImg.setAttribute('src', './images/50.png')
            if (50 >= health) {
                colorHealth.className = 'health-scale-orange'
            }
            if (50 >= saturation) {
                colorSaturation.className = 'health-scale-orange'
            }
            if (50 >= strength) {
                colorStrength.className = 'health-scale-orange'
            }
            if (50 >= happiness) {
                colorHappiness.className = 'health-scale-orange'
            }
            if (50 >= purity) {
                colorPurity.className = 'health-scale-orange'
            }
        }
        if (40 >= health || 40 >= saturation || 40 >= strength || 40 >= happiness || 40 >= purity) {
            tamagotchiImg.setAttribute('src', './images/40.png')
        }
        if (30 >= health || 30 >= saturation || 30 >= strength || 30 >= happiness || 30 >= purity) {
            tamagotchiImg.setAttribute('src', './images/30.png')
        }
        if (20 >= health || 20 >= saturation || 20 >= strength || 20 >= happiness || 20 >= purity) {
            tamagotchiImg.setAttribute('src', './images/20.png')
            if (20 >= health) {
                colorHealth.className = 'health-scale-red'
            }
            if (20 >= saturation) {
                colorSaturation.className = 'health-scale-red'
            }
            if (20 >= strength) {
                colorStrength.className = 'health-scale-red'
            }
            if (20 >= happiness) {
                colorHappiness.className = 'health-scale-red'
            }
            if (20 >= purity) {
                colorPurity.className = 'health-scale-red'
            }
        }
        if (10 >= health || 10 >= saturation || 10 >= strength || 10 >= happiness || 10 >= purity) {
            tamagotchiImg.setAttribute('src', './images/10.png')
        }

        showTextContent()

        health -= 2
        saturation -= 2
        strength -= 2
        happiness -= 2
        purity -= 2

    } else {
        tamagotchiHealth.textContent = '0'
        tamagotchiSaturation.textContent = '0'
        tamagotchiStrength.textContent = '0'
        tamagotchiHappiness.textContent = '0'
        tamagotchiPuring.textContent = '0'

        tamagotchiImg.setAttribute('src', './images/0.png')
        h2.style.display = 'block'
        h2.textContent = 'GAME OVER';
    }
}, 3000)

function showTextContent() {
    // Якщо параментри тамагочі більше 100, то виводимо 100
    if (health > 100) health = 100
    if (saturation > 100) saturation = 100
    if (strength > 100) strength = 100
    if (happiness > 100) happiness = 100
    if (purity > 100) purity = 100

    // Якщо параментри тамагочі знизився до 0, то виводимо 0
    if (health < 0) health = 0
    if (saturation < 0) saturation = 0
    if (strength < 0) strength = 0
    if (happiness < 0) happiness = 0
    if (purity < 0) purity = 0

    tamagotchiName.textContent = tamagotchiGosha.name
    tamagotchiHealth.textContent = health
    tamagotchiSaturation.textContent = saturation
    tamagotchiStrength.textContent = strength
    tamagotchiHappiness.textContent = happiness
    tamagotchiPuring.textContent = purity
}

function showOrRemoveContentForFeed() {
    if (0 === health) {
        tamagotchiFeed.removeEventListener('click', showOrRemoveContentForFeed)
    } else {
        tamagotchiGosha.feed()
        showTextContent()
    }
}
tamagotchiFeed.addEventListener('click', showOrRemoveContentForFeed)

function showOrRemoveContentForDrink() {
    if (0 === health) {
        tamagotchiDrink.removeEventListener('click', showOrRemoveContentForDrink)
    } else {
        tamagotchiGosha.drink()
        showTextContent()
    }
}
tamagotchiDrink.addEventListener('click', showOrRemoveContentForDrink)

function showOrRemoveContentForStudy() {
    if (0 === health) {
        tamagotchiStudy.removeEventListener('click', showOrRemoveContentForStudy)
    } else {
        tamagotchiGosha.study()
        showTextContent()
    }
}
tamagotchiStudy.addEventListener('click', showOrRemoveContentForStudy)

function showOrRemoveContentForPlay() {
    if (0 === health) {
        tamagotchiPlay.removeEventListener('click', showOrRemoveContentForPlay)
    } else {
        tamagotchiGosha.play()
        showTextContent()
    }
}
tamagotchiPlay.addEventListener('click', showOrRemoveContentForPlay)

function showOrRemoveContentForWalk() {
    if (0 === health) {
        tamagotchiWalk.removeEventListener('click', showOrRemoveContentForWalk)
    } else {
        tamagotchiGosha.walk()
        showTextContent()
    }
}
tamagotchiWalk.addEventListener('click', showOrRemoveContentForWalk)

function showOrRemoveContentForSleep() {
    if (0 === health) {
        tamagotchiSleep.removeEventListener('click', showOrRemoveContentForSleep)
    } else {
        tamagotchiGosha.sleep()
        showTextContent()
    }
}
tamagotchiSleep.addEventListener('click', showOrRemoveContentForSleep)

function showOrRemoveContentForTreat() {
    if (0 === health) {
        tamagotchiTreat.removeEventListener('click', showOrRemoveContentForTreat)
    } else {
        tamagotchiGosha.treat()
        showTextContent()
    }
}
tamagotchiTreat.addEventListener('click', showOrRemoveContentForTreat)

function showOrRemoveContentForBathe() {
    if (0 === health) {
        tamagotchiBathe.removeEventListener('click', showOrRemoveContentForBathe)
    } else {
        tamagotchiGosha.bathe()
        showTextContent()
    }
}
tamagotchiBathe.addEventListener('click', showOrRemoveContentForBathe)