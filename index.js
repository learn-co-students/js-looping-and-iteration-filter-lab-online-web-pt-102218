// Code your solution in this file

function findMatching(driverArr, name) {
  return driverArr.filter(function (driver) { return driver.toUpperCase() === name.toUpperCase(); });
} 

function fuzzyMatch(driverArr, text) { return driverArr.filter(function(driver) {return driver.startsWith(text);})};

function matchName(driverArr, name) { return driverArr.filter(function(driver) { return driver.name === name; })}; 