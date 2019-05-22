// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
  return drivers.filter(function(driver) {
    return driver.toLowerCase() === name.toLowerCase();
  })

}
  

console.log(findMatching(drivers, 'bobby'));

function fuzzyMatch(drivers, name) {
  return drivers.filter(function(driver) {
    return driver[0] === name[0];
  })
}

function matchName(drivers, name) {
  const newCollection = [];
  for (const driver of drivers) {
    if (driver.name === name) {
       newCollection.push(driver);
    }
  }
  return newCollection;
}