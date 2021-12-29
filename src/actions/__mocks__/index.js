module.exports={
    ...jest.requireActual('..'),
    __esModule:true,
    //Todo: update return value for redux/context implementation
    getSecretWord: jest.fn().mockReturnValue(Promise.resolve('party')),
}