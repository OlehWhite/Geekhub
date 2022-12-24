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

// Color style for HP
colorHealth.className = 'health-scale-green'
colorSaturation.className = 'health-scale-green'
colorStrength.className = 'health-scale-green'
colorHappiness.className = 'health-scale-green'
colorPurity.className = 'health-scale-green'

h2.style.display = 'none'

tamagotchiFeed.style.display = 'block'

class Tamagotchi {
    constructor(name) {
        this.name = name
        this.health = 100
        this.saturation = 100
        this.strength = 100
        this.happiness = 100
        this.purity = 100

        this.tamagotchiImg = tamagotchiImg
        this.h2 = h2

        // Color HP
        this.colorHealth = colorHealth
        this.colorSaturation = colorSaturation
        this.colorStrength = colorStrength
        this.colorHappiness = colorHappiness
        this.colorPurity = colorPurity

        // Section Characteristics
        this.tamagotchiName = tamagotchiName
        this.tamagotchiHealth = tamagotchiHealth
        this.tamagotchiSaturation = tamagotchiSaturation
        this.tamagotchiStrength = tamagotchiStrength
        this.tamagotchiHappiness = tamagotchiHappiness
        this.tamagotchiPuring = tamagotchiPuring

        // Section Properties
        this.tamagotchiFeed = tamagotchiFeed
        this.tamagotchiDrink = tamagotchiDrink
        this.tamagotchiStudy = tamagotchiStudy
        this.tamagotchiPlay = tamagotchiPlay
        this.tamagotchiWalk = tamagotchiWalk
        this.tamagotchiSleep = tamagotchiSleep
        this.tamagotchiTreat = tamagotchiTreat
        this.tamagotchiBathe = tamagotchiBathe

        let timeInterval = setInterval(() => {
            console.log(this.health, this.saturation, this.strength, this.happiness, this.purity)
            if (0 < this.health) {
                // В залежності стільки хп в тамаогочі, змінювати картинку
                if (100 >= this.health || 100 >= this.saturation || 100 >= this.strength || 100 >= this.happiness || 100 >= this.purity) {
                    this.colorHealth.className = 'health-scale-green'
                    this.colorSaturation.className = 'health-scale-green'
                    this.colorStrength.className = 'health-scale-green'
                    this.colorHappiness.className = 'health-scale-green'
                    this.colorPurity.className = 'health-scale-green'
                }
                if (90 >= this.health || 90 >= this.saturation || 90 >= this.strength || 90 >= this.happiness || 90 >= this.purity) {
                    this.tamagotchiImg.setAttribute('src', './images/90.png')
                }
                if (80 >= this.health || 80 >= this.saturation || 80 >= this.strength || 80 >= this.happiness || 80 >= this.purity) {
                    this.tamagotchiImg.setAttribute('src', './images/80.png')
                    if (80 >= this.health) {
                        this.colorHealth.className = 'health-scale-yellow'
                    }
                    if (80 >= this.saturation) {
                        this.colorSaturation.className = 'health-scale-yellow'
                    }
                    if (80 >= this.strength) {
                        this.colorStrength.className = 'health-scale-yellow'
                    }
                    if (80 >= this.happiness) {
                        this.colorHappiness.className = 'health-scale-yellow'
                    }
                    if (80 >= this.purity) {
                        this.colorPurity.className = 'health-scale-yellow'
                    }
                }
                if (70 >= this.health || 70 >= this.saturation || 70 >= this.strength || 70 >= this.happiness || 70 >= this.purity) {
                    this.tamagotchiImg.setAttribute('src', './images/70.png')
                }
                if (60 >= this.health || 60 >= this.saturation || 60 >= this.strength || 60 >= this.happiness || 60 >= this.purity) {
                    this.tamagotchiImg.setAttribute('src', './images/60.png')
                }
                if (50 >= this.health || 50 >= this.saturation || 50 >= this.strength || 50 >= this.happiness || 50 >= this.purity) {
                    this.tamagotchiImg.setAttribute('src', './images/50.png')
                    if (50 >= this.health) {
                        this.colorHealth.className = 'health-scale-orange'
                    }
                    if (50 >= this.saturation) {
                        this.colorSaturation.className = 'health-scale-orange'
                    }
                    if (50 >= this.strength) {
                        this.colorStrength.className = 'health-scale-orange'
                    }
                    if (50 >= this.happiness) {
                        this.colorHappiness.className = 'health-scale-orange'
                    }
                    if (50 >= this.purity) {
                        this.colorPurity.className = 'health-scale-orange'
                    }
                }
                if (40 >= this.health || 40 >= this.saturation || 40 >= this.strength || 40 >= this.happiness || 40 >= this.purity) {
                    this.tamagotchiImg.setAttribute('src', './images/40.png')
                }
                if (30 >= this.health || 30 >= this.saturation || 30 >= this.strength || 30 >= this.happiness || 30 >= this.purity) {
                    this.tamagotchiImg.setAttribute('src', './images/30.png')
                }
                if (20 >= this.health || 20 >= this.saturation || 20 >= this.strength || 20 >= this.happiness || 20 >= this.purity) {
                    this.tamagotchiImg.setAttribute('src', './images/20.png')
                    if (20 >= this.health) {
                        this.colorHealth.className = 'health-scale-red'
                    }
                    if (20 >= this.saturation) {
                        this.colorSaturation.className = 'health-scale-red'
                    }
                    if (20 >= this.strength) {
                        this.colorStrength.className = 'health-scale-red'
                    }
                    if (20 >= this.happiness) {
                        this.colorHappiness.className = 'health-scale-red'
                    }
                    if (20 >= this.purity) {
                        this.colorPurity.className = 'health-scale-red'
                    }
                }
                if (10 >= this.health || 10 >= this.saturation || 10 >= this.strength || 10 >= this.happiness || 10 >= this.purity) {
                    this.tamagotchiImg.setAttribute('src', './images/10.png')
                }

                // Якщо параментри тамагочі більше 100, то виводимо 100
                if (this.health > 100) this.health = 100
                if (this.saturation > 100) this.saturation = 100
                if (this.strength > 100) this.strength = 100
                if (this.happiness > 100) this.happiness = 100
                if (this.purity > 100) this.purity = 100

                // Якщо параментри тамагочі знизився до 0, то виводимо 0
                if (this.health < 0) this.health = 0
                if (this.saturation < 0) this.saturation = 0
                if (this.strength < 0) this.strength = 0
                if (this.happiness < 0) this.happiness = 0
                if (this.purity < 0) this.purity = 0

                this.tamagotchiName.textContent = this.name
                this.tamagotchiHealth.textContent = this.health
                this.tamagotchiSaturation.textContent = this.saturation
                this.tamagotchiStrength.textContent = this.strength
                this.tamagotchiHappiness.textContent = this.happiness
                this.tamagotchiPuring.textContent = this.purity

                this.health -= 2
                this.saturation -= 2
                this.strength -= 2
                this.happiness -= 2
                this.purity -= 2

            } else {
                this.tamagotchiHealth.textContent = '0'
                this.tamagotchiSaturation.textContent = '0'
                this.tamagotchiStrength.textContent = '0'
                this.tamagotchiHappiness.textContent = '0'
                this.tamagotchiPuring.textContent = '0'

                this.tamagotchiImg.setAttribute('src', './images/0.png')
                this.h2.style.display = 'block'
                this.h2.textContent = 'GAME OVER';
                clearInterval(timeInterval)
            }
        }, 3000)

        this.tamagotchiFeed.addEventListener('click', () => this.feed())
        this.tamagotchiDrink.addEventListener('click', () => this.drink())
        this.tamagotchiStudy.addEventListener('click', () => this.study())
        this.tamagotchiPlay.addEventListener('click', () => this.play())
        this.tamagotchiWalk.addEventListener('click', () => this.walk())
        this.tamagotchiSleep.addEventListener('click', () => this.sleep())
        this.tamagotchiTreat.addEventListener('click', () => this.treat())
        this.tamagotchiBathe.addEventListener('click', () => this.bathe())
    }

    feed() {
        return {
            health: this.health += 5,
            saturation: this.saturation += 15,
            strength: this.strength += 5,
            happiness: this.happiness += 5,
            purity: this.purity -= 5,
        }
    }

    drink() {
        return {
            health: this.health += 5,
            strength: this.strength += 5,
            happiness: this.happiness += 5,
        }
    }

    study() {
        return {
            health: this.health -= 5,
            saturation: this.saturation -= 5,
            strength: this.strength -= 5,
            happiness: this.happiness -= 10,
            purity: this.purity -= 5,
        }
    }

    play() {
        return {
            health: this.health -= 5,
            saturation: this.saturation -= 5,
            strength: this.strength -= 5,
            happiness: this.happiness += 15,
        }
    }

    walk() {
        return {
            health: this.health += 15,
            saturation: this.saturation -= 5,
            strength: this.strength -= 5,
            happiness: this.happiness += 5,
            purity: this.purity -= 5,
        }
    }

    sleep() {
        return {
            health: this.health += 15,
            saturation: this.saturation -= 5,
            strength: this.strength += 5,
            happiness: this.happiness -= 5,
            purity: this.purity -= 5,
        }
    }

    treat() {
        return {
            health: this.health += 10,
            strength: this.strength += 5,
            happiness: this.happiness -= 5,
        }
    }

    bathe() {
        return {
            happiness: this.happiness += 10,
            purity: this.purity += 5,
        }
    }
}

const tamagotchiGosha = new Tamagotchi('Tamagotchik');
const tamagotchiGosha2 = new Tamagotchi('Tamagotchik2');
const tamagotchiGosha3 = new Tamagotchi('Tamagotchik3');
