class Tamagotchi {
    constructor(name, parent) {
        this.name = name
        this.parent = parent

        this.health = 100
        this.saturation = 100
        this.strength = 100
        this.happiness = 100
        this.purity = 100

        this.healthColor = 'health-scale-green'
        this.saturationColor = 'health-scale-green'
        this.strengthColor = 'health-scale-green'
        this.happinessColor = 'health-scale-green'
        this.purityColor = 'health-scale-green'

        this.img = './images/100.png'

        this.textGameOver = ''
    }

    template() {
        return `
            <section class="section">
                <div class="section-list">
                    <ul class="list">
                        <li class="item item-feed">Поїсти</li>
                        <li class="item item-drink">Попити</li>
                        <li class="item item-study">Вчитися</li>
                        <li class="item item-play">Пограти</li>
                        <li class="item item-walk">Погуляти</li>
                        <li class="item item-sleep">Поспати</li>
                        <li class="item item-treat">Лікувати</li>
                        <li class="item item-bathe">Купати</li>
                    </ul>
                </div>
                <div class="section-tamagocthi">
                    <div class="tamagocthi">
                        <img class="tamagocthi-img" src="${this.img}" alt="Tamagotchi">
                    </div>
                    <h2 class="h2">${this.textGameOver}</h2>
                </div>
                <div class="section-info_tamagocthi">
                    <ul class="list-info">
                        <li class="item-info">Ім'я / <span class="item-name">${this.name}</span></li>
                        <li class="item-info">Життя / <span class="item-health ${this.healthColor}">${this.health}</span></li>
                        <li class="item-info">Голод / <span class="item-saturation ${this.saturationColor}">${this.saturation}</span></li>
                        <li class="item-info">Сила / <span class="item-strength ${this.strengthColor}">${this.strength}</span></li>
                        <li class="item-info">Щастя / <span class="item-happiness ${this.happinessColor}">${this.happiness}</span></li>
                        <li class="item-info">Чистота / <span class="item-purity ${this.purityColor}">${this.purity}</span></li>
                    </ul>
                </div>
            </section>`
    }

    render() {
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

        if (this.health >= 0) {
            this.parent.innerHTML = this.template()
            this.feed()
            this.drink()
            this.study()
            this.play()
            this.walk()
            this.sleep()
            this.treat()
            this.bathe()
            // В залежності стільки хп в тамаогочі, змінювати картинку
            if (100 >= this.health || 100 >= this.saturation || 100 >= this.strength || 100 >= this.happiness || 100 >= this.purity) {
                this.healthColor = 'health-scale-green'
                this.saturationColor = 'health-scale-green'
                this.strengthColor = 'health-scale-green'
                this.happinessColor = 'health-scale-green'
                this.purityColor = 'health-scale-green'
            }
            if (90 >= this.health || 90 >= this.saturation || 90 >= this.strength || 90 >= this.happiness || 90 >= this.purity) {
                this.img = './images/90.png'
            }
            if (80 >= this.health || 80 >= this.saturation || 80 >= this.strength || 80 >= this.happiness || 80 >= this.purity) {
                this.img = './images/80.png'
                if (80 >= this.health) {
                    this.healthColor = 'health-scale-yellow'
                }
                if (80 >= this.saturation) {
                    this.saturationColor = 'health-scale-yellow'
                }
                if (80 >= this.strength) {
                    this.strengthColor = 'health-scale-yellow'
                }
                if (80 >= this.happiness) {
                    this.happinessColor = 'health-scale-yellow'
                }
                if (80 >= this.purity) {
                    this.purityColor = 'health-scale-yellow'
                }
            }
            if (70 >= this.health || 70 >= this.saturation || 70 >= this.strength || 70 >= this.happiness || 70 >= this.purity) {
                this.img = './images/70.png'
            }
            if (60 >= this.health || 60 >= this.saturation || 60 >= this.strength || 60 >= this.happiness || 60 >= this.purity) {
                this.img = './images/60.png'
            }
            if (50 >= this.health || 50 >= this.saturation || 50 >= this.strength || 50 >= this.happiness || 50 >= this.purity) {
                this.img = './images/50.png'
                if (50 >= this.health) {
                    this.healthColor = 'health-scale-orange'
                }
                if (50 >= this.saturation) {
                    this.saturationColor = 'health-scale-orange'
                }
                if (50 >= this.strength) {
                    this.strengthColor = 'health-scale-orange'
                }
                if (50 >= this.happiness) {
                    this.happinessColor = 'health-scale-orange'
                }
                if (50 >= this.purity) {
                    this.purityColor = 'health-scale-orange'
                }
            }
            if (40 >= this.health || 40 >= this.saturation || 40 >= this.strength || 40 >= this.happiness || 40 >= this.purity) {
                this.img = './images/40.png'
            }
            if (30 >= this.health || 30 >= this.saturation || 30 >= this.strength || 30 >= this.happiness || 30 >= this.purity) {
                this.img = './images/30.png'
            }
            if (20 >= this.health || 20 >= this.saturation || 20 >= this.strength || 20 >= this.happiness || 20 >= this.purity) {
                this.img = './images/20.png'
                if (20 >= this.health) {
                    this.healthColor = 'health-scale-red'
                }
                if (20 >= this.saturation) {
                    this.saturationColor = 'health-scale-red'
                }
                if (20 >= this.strength) {
                    this.strengthColor = 'health-scale-red'
                }
                if (20 >= this.happiness) {
                    this.happinessColor = 'health-scale-red'
                }
                if (20 >= this.purity) {
                    this.purityColor = 'health-scale-red'
                }
            }
            if (10 >= this.health || 10 >= this.saturation || 10 >= this.strength || 10 >= this.happiness || 10 >= this.purity) {
                this.img = './images/10.png'
            }
            if (2 >= this.health) {
                this.textGameOver = 'GAME OVER';
                this.img = './images/0.png'
            }
        } else {
            clearInterval(this.interval)
        }
    }

    feed() {
        this.parent
            .querySelector('.item-feed')
            .addEventListener('click', () => {
                this.health += 5
                this.saturation += 15
                this.strength += 5
                this.happiness += 5
                this.purity -= 5
                this.render()
        })
    }

    drink() {
        this.parent
            .querySelector('.item-drink')
            .addEventListener('click', () => {
                this.health += 5
                this.strength += 5
                this.happiness += 5
                this.render()
        })
    }

    study() {
        this.parent
            .querySelector('.item-study')
            .addEventListener('click', () => {
                this.health -= 5
                this.saturation -= 5
                this.strength -= 5
                this.happiness -= 10
                this.purity -= 5
                this.render()
            })
    }

    play() {
        this.parent
            .querySelector('.item-play')
            .addEventListener('click', () => {
                this.health -= 5
                this.saturation -= 5
                this.strength -= 5
                this.happiness += 15
                this.render()
            })
    }

    walk() {
        this.parent
            .querySelector('.item-walk')
            .addEventListener('click', () => {
                this.health += 15
                this.saturation -= 5
                this.strength -= 5
                this.happiness += 5
                this.purity -= 5
                this.render()
            })
    }

    sleep() {
        this.parent
            .querySelector('.item-sleep')
            .addEventListener('click', () => {
                this.health += 15
                this.saturation -= 5
                this.strength += 5
                this.happiness -= 5
                this.purity -= 5
                this.render()
            })
    }

    treat() {
        this.parent
            .querySelector('.item-treat')
            .addEventListener('click', () => {
                this.health += 10
                this.strength += 5
                this.happiness -= 5
                this.render()
            })
    }

    bathe() {
        this.parent
            .querySelector('.item-bathe')
            .addEventListener('click', () => {
                this.happiness += 10
                this.purity += 5
                this.render()
            })
    }

    alive() {
        this.interval = setInterval(() => {
            this.render()
            this.health -= 2
            this.saturation -= 2
            this.strength -= 2
            this.happiness -= 2
            this.purity -= 2
        }, 3000)
    }
}

const createTamagotchi = () => {
    const tamagotchiWrapper = document.createElement('div');
    const tmgSection = document.querySelector('.section-wrapper')
    tmgSection.appendChild(tamagotchiWrapper)
    const tamagotchi = new Tamagotchi('Тамагочі', tamagotchiWrapper);
    tamagotchi.alive()
}

document.querySelector('.btn-tmg').addEventListener('click', createTamagotchi)
