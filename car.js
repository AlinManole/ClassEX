// CAR

class Car {
    constructor(brand, speed) {
        this.brand = brand
        this.speed = speed
    }


    accelerate(num) {
        this.speed = this.speed + num
    }
    // accelerate(num) 

    break(num) {
        this.speed = this.speed + num
    }
    // break(num)

    describe() {
        console.log(`${this.brand} running at ${this.speed} Km/h`)
    }
}

var ford = new Car('Ford', 0)

ford.accelerate(50)
ford.break(25)

console.log(ford)


// TV

class TV {

    constructor(brand , channel , volume) {
        this.brand = brand
        this.channel = channel
        this.volume = volume
    }

    volumeUp(vol) {
        this.volume = this.volume + vol
    }
    volumeUp(vol)

    volumeDown(vol) {
        this.volume = this.volume - vol
    }
    volumeDown(vol)

    channelUp(chan) {
        this.channel = this.channel  + chan
    }

    channelDown(chan) {
        this.channel = this.channel  - chan
    }

}

    var myTv = new TV('Samsung', 1 , 0)
    

    