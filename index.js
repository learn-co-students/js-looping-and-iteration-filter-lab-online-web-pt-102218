
function findMatching(arr,string){
   return arr.filter(function(name){return name.toUpperCase() === string.toUpperCase()})
}

function matchName(arr, string){
    return arr.filter(function(object){return object.name === string})
}

function fuzzyMatch(arr, string){
    return arr.filter(function(object) {return object.startsWith(string)})
}