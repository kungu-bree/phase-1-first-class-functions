function receivesAFunction(cb) {
    return (cb());
}

function returnsANamedFunction() {
    return function beforeAll(){}
}

function returnsAnAnonymousFunction() {
    return function(){}
}