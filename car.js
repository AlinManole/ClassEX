// CAR

class Car {
    constructor(brand, speed) {
        this.brand = brand
        this.speed = speed
    }


    accelerate(num) {
        this.speed = this.speed + num
    }
    break(num) {
        this.speed = this.speed - num
    }


    describe() {
        console.log(`${this.brand} running at ${this.speed} Km/h`)
    }
}

var ford = new Car('Ford', 0)

ford.accelerate(50)
console.log(ford)
ford.break(25)

console.log(ford)


// TV

class TV {

    constructor(brand , channel , volume) {
        this.brand = brand
        this.channel = channel
        this.volume = volume
    }

    volumeUp(num) {
        if (num + this.volume < 100) {
            this.volume = this.volume + num
        }

    }
    

    volumeDown(num) {
        if (num - this.volume > 0) {
            this.volume = this.volume - num
        }
    }
    

    channelUp(chan) {
        this.channel = this.channel  + chan
    }
    

    channelDown(chan) {
        this.channel = this.channel  - chan
    }


    changeChan (chan) {
        console.log(chan)
        if (chan > 0 && chan < 50) {
            this.channel = chan
        }        
    }

    reset () {
        this.channel = 1
        this.volume = 50
    }
    
}

    var myTv = new TV('Samsung', 0 , 0)
    
    myTv.channelUp(1)
    myTv.volumeUp(20)
    console.log(myTv)
  


    