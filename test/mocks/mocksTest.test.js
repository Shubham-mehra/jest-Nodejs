const { default: axios } = require("axios")
const { AxiosTest } = require("../../src/axios/axiosMockTest")
const ForEachMock = (items, mockCallback) => {
    for (i = 0; i < items.length; i++) {
        mockCallback(items[i])
    }
}



describe("Test Mocks Test ", () => {
    beforeEach(() => console.log("Before : Mock Test !!!!"))
    it("Mock test", () => {
        const array = [1, 3, 4, 2, 4, 2]
        const mockCallback = jest.fn(x => x + 1);
        ForEachMock(array, mockCallback);
        expect(mockCallback.mock.calls.length).toBe(6)
    })
    afterEach(() => console.log("After :Mock Test !!!!"))

})

// describe("Fetch data: Axios", () => {
//     it("Spy on Mock", async () => {
//         const mockData = { data: { id: 1 } };

//         // Use jest.spyOn to mock the axios.get method
//         jest.spyOn(axios, "get").mockReturnValueOnce(Promise.resolve(mockData));

//         // Call AxiosTest function that uses axios.get
//         const result = await AxiosTest(1);
//         console.log(result)
//         // Assert the behavior of AxiosTest function
//         expect(result).toEqual(mockData);

//         // Restore the axios.get mock after the test
//         axios.get.mockRestore();
//     });
// });