// Code your solution in this file
function findMatching(array, str){
    const collection = []
    for (const driver of array){
        if (driver.toLowerCase() === str.toLowerCase()){
            collection.push(driver)
        }
    }
    return collection
}

function fuzzyMatch(array, letters){
    const collection = []
    for (const driver of array){
        if (driver.toLowerCase().slice(0,letters.length) == letters.toLowerCase()){
            collection.push(driver)
        }
    }
    return collection
}

function matchName(drivers, name){
    const collection = []
    for (const driver of drivers){
        if (driver['name'] === name){
            collection.push(driver)
        }
    }
    return collection
}