class Bag{
    static weightLimit = 23

    constructor(weight){
        if (!weight){
            throw new Error("bag must have a weight")
        }
        this.weight = weight
    }
    isOverLimit(){
        if(weight >= weightLimit){
            //throw error 
            return true
        }else{
            return false
        }
    }
}   
 
class Traveller{
    bags = []
    constructor(name,passportNumber){
        this.name = name
        this.passportNumber = passportNumber
    }
    addBag(bag){
        this.bags.push(bag)
    }

}
class Passenger extends Traveller{

    bags = []
    constructor(name,passportNumber,seatNumber){
        if (!name){
            throw new Error("must provide name")
        }else if (!passportNumber){
            throw new Error("must provide passport number")
        }else if(!seatNumber){
            throw new Error("must provide seat number")
        }

        super(name,passportNumber)
        this.seatNumber = seatNumber
    }

    addBag(bag){
        this.bags.push(bag)
        //get weight and add to passenger info?
    }

    callAttendant(){
        console.log("Excuse me, can I get some help please?")
    }
}

class CrewMember extends Traveller{
    doors = "auto"
   
    crewMembersOnPlane = []
    constructor(name,passportNumber, position,staffNumber){
        if (!name){
            throw new Error("must provide name")
        }else if (!position){
            throw new Error("must provide position")
        }else if(!staffNumber){
            throw new Error("must provide staff number")
        }
        super(name,passportNumber)
        this.position = position
        this.staffNumber = staffNumber
    }
    addCrewToPlane(crew){
        this.crewMembersOnPlane.push(crew)
    }

    setDoorstoManual(){
        doors = "manual"
    }
}

class Plane{

    travellers = []
    constructor(type){
        if (!type){
            throw new Error("must provide plane type")
        }
        this.type = type
    }

    board(Traveller){
        this.travellers.push(Traveller)
    }
}

class Airport{
    planes = []
    constructor(name){
        if (!name){
            throw new Error("must provide airport name")
        }
        this.name = name
    }

    addPlane(plane){
        this.planes.push(plane)
    }

    fly(plane,destination){
        departureAirport = this.name //unnecessary
        destinationAirport = [plane, destination]

        if (this.planes.includes(plane) && destinationAirport.includes(plane)){
            throw "destination reached!"
        }else{
            throw new Error("NOT FOUND")
        }
    }
}

class Runways{

    static MaxPlanesOnRunways = 4
    static planes = []

    static addPlaneToRunway(plane){
        if (Runways.planes.length > MaxPlanesOnRunways){
            throw new Error("Runways full!!")
        }else{
            Runways.planes.push(plane)
        }
    }

    static removePlaneFromRunway(plane){
        if (planes.includes(plane)){
            planes.remove(plane)
        }else{
            throw new Error("Plane not on runway")
        }
    }
}


try{
    const bag = new Bag(16)
    //no error if we made it this far
} catch{
    console.log("there's been an error")
    //handle error
}

module.exports = {Bag, Passenger, CrewMember, Plane, Airport}