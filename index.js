// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    let firstDrivers = []
    for (let i = 0; i < drivers.length; i++) {
        if (drivers.indexOf(drivers[i]) <= 1) {
            firstDrivers.push(drivers[i])
        }
    }
    return firstDrivers
}

const returnLastTwoDrivers = function(drivers) {
    let lastDrivers = []
    for (let i = 0; i < drivers.length; i++) {
        if (drivers.indexOf(drivers[i]) > 1) {
            lastDrivers.push(drivers[i])
        }
    }
    return lastDrivers
}


const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

const createFareMultiplier = function() {
    return function multiplier(value) {
        return value * value
    }
}


// `fareDoubler()`—
// Declare a variable with `const`
// and assign a
// function returned by `createFareMultiplier()`
// to it.Invoke `createFareMultiplier()` in such a way that the new `fareDoubler()`
// function accepts a fare as its lone argument and doubles it.

const fareDoubler = function(fare) {
    return (createFareMultiplier()(fare / 2) - 5)
}

// `fareTripler()`—
// Declare a variable with `const`
// and assign a
// function returned by `createFareMultiplier()`
// to it.Invoke `createFareMultiplier()` in such a way that the new `fareTripler()`
// function accepts a fare as its lone argument and triples it.

const fareTripler = function(fare) {
    return (createFareMultiplier()(fare / 2) - fare + fare)
}

// +`selectDifferentDrivers()`—
// This
// function takes two arguments, an array of `drivers`
// and either the `returnFirstTwoDrivers()`
// or `returnLastTwoDrivers()`
// function.Based on these two arguments, `selectDifferentDrivers()`
// will
// return either the first two drivers or the last two drivers.

const selectDifferentDrivers = function(drivers, driverFunc) {
    let driverFuncResult = driverFunc(drivers)
    return driverFuncResult
}