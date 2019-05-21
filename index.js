// Code your solution in this file
function findMatching(drivers, string) {
    const out = drivers.filter(function(name) { return name.toUpperCase() === string.toUpperCase() })
    return out
}

function fuzzyMatch(drivers, letters) {
    const out = drivers.filter(function(name) { return name.slice(0, letters.length).toUpperCase() === letters.toUpperCase() })
    return out
}

function matchName(drivers, string) {
    const out = drivers.filter(function(key) { return key.name === string} )
    return out
}