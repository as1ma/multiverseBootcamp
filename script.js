class Bag{
    weightLimit = 30

    constructor(weight){
        if (!weight){
            throw new Error("bag must have a weight")
        }
        this.weight = weight
    }
    isOverLimit(){
        if(weight >= weightLimit){
            return true
        }else{
            return false
        }
    }
}   


class Passenger{

    bags = []
    constructor(name,passportNumber,seatNumber){
        if (!name){
            throw new Error("must provide name")
        }else if (!passportNumber){
            throw new Error("must provide passport number")
        }else if(!seatNumber){
            throw new Error("must provide seat number")
        }

        this.name = name
        this.passportNumber = passportNumber
        this.seatNumber = seatNumber
    }

    addBag(bag){
        this.bags.push(bag)
        //get weight and add to passenger info?
    }

}

class CrewMember{

    //add crew member to plane?
    constructor(name,position,staffNumber){
        if (!name){
            throw new Error("must provide name")
        }else if (!position){
            throw new Error("must provide position")
        }else if(!staffNumber){
            throw new Error("must provide staff number")
        }
        this.name = name
        this.position = position
        this.staffNumber = staffNumber
    }
}

class Plane{

    passengers = []
    constructor(type){
        if (!type){
            throw new Error("must provide plane type")
        }
        this.type = type
    }

    board(Passenger){
        this.passengers.push(Passenger)
    }
}

class Airport{
    //add planes to airport?
    constructor(name){
        if (!name){
            throw new Error("must provide airport name")
        }
        this.name = name
    }
}


try{
    const bag = new Bag(16)
    //no error if we made it this far
} catch{
    //handle error
}
