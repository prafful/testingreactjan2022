import add from "../add"

describe("add test", ()=>{


    it("check addition", ()=>{
        const addition = add(4,5)
        expect(addition).toBe(9)
    })

})


test("check addition in individual test", ()=>{
    const addition = add(4,5)
    expect(addition).toBe(9)
})