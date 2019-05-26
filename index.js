// Code your solution in this file
function findMatching(drivers,name){
    return drivers.filter((driver)=>{
        return driver.toLowerCase()==name.toLowerCase()
    })
}

function fuzzyMatch(drivers,s){
    return drivers.filter((driver)=>{
        return driver.substring(0,s.length)==s
    })
}

function matchName(drivers,name){
    return drivers.filter((driver)=>{
        return driver.name == name
    })
}
