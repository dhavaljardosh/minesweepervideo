const createBoard = require("./createBoard")
// @ponicode
describe("createBoard.default", () => {
    test("0", () => {
        let callFunction = () => {
            createBoard.default(10, 10, "transition vertical mindshare")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            createBoard.default(-1, 1, "transition vertical mindshare")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            createBoard.default(-10, -1, "transform holistic deliverables")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            createBoard.default(10, "INSERT INTO [", "transform holistic deliverables")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            createBoard.default(0.0, 0, "innovate end-to-end markets")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            createBoard.default(Infinity, Infinity, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
