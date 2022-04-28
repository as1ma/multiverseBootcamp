const {Bag, Passenger, CrewMember, Plane, Airport} = require("./script")
//const passenger = new Passenger("name","PASSPORT123","1A")

describe("Bag", function(){
    test.only("has a weight", ()=>{
        const bag = new Bag(13)
        expect(bag.weight).toBe(13)
    })

    // test("does not have a weight", ()=>{
    //     expect(()=> new Bag()).toThrowError("Bag must have a weight")
    // })

    test("bag too heavy - ", ()=>{
        const bag = new Bag(31)
        expect(bag.isOverLimit()).toBe("Bag is too heavy")
    })

    test("bag can have a valid weight", ()=>{
        const bag = new Bag(29)
        expect(bag.isOverLimit()).toBe("Bag is a valid weight")
    })
})


describe("Passenger", function(){
    test("has a name", ()=>{
        const passenger = new Passenger("name","PASSPORT123","1A")
        expect(passenger.name).toBe("name")
    })

    //check bag array
    // test("check bag array is not empty",()=>{
    //     const Passenger.bags = ["20"]
    //     expect()
    // })
})

describe("CrewMember", function(){
    test("has a name", ()=>{
        const crewMember = new CrewMember("John","Pilot","1")
        expect(crewMember.name).toBe("name")
    })

})

describe("Plane", function(){
    test("has a name", ()=>{
        const plane = new Plane("Beijing")
        expect(plane.type).toBe("Beijing")
    })
})

describe("Airport", function(){
    test("has a name", ()=>{
        const airport = new Airport("LHR")
        expect(airport.name).toBe("LHR")
    })

})