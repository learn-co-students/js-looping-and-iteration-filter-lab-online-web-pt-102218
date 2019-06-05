// Code your solution in this file
function findMatching (drivers, name) {
  return drivers.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, name) {
  let length = name.length;
  return drivers.filter(function (driver) {
    return driver.slice(0, length) === name;
  });
}

function matchName (nl, name) {
  return nl.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}