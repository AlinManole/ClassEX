// CAR

class Car {
    constructor(brand, speed) {
        this.brand = brand
        this.speed = speed
    }


    accelerate() {
        this.speed = 50 + 'Km/h'
    }

    break() {
        this.speed = 25 + 'Km/h'
    }

    describe() {
        console.log(`${this.brand} running at ${this.speed} Km/h`)
    }
}

var ford = new Car('Ford', 0)
console.log(ford)

ford.accelerate()
console.log(ford)

ford.break()
console.log(ford)

ford.describe()


// TV

class TV {

    constructor( brand , channel , volume) {
        brand = brand
        channel = channel
        volume = volume
    }

    volumeUp() {
        this.volume += volume
    }

    volumeDown() {
        this.volume -= volume
    }

    channelUp() {

    }

    channelDown() {

    }

}


