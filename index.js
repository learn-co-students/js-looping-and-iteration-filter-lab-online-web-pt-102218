// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
    });
}
function fuzzyMatch(drivers, st) {
  const stlength = st.length;
  return drivers.filter(function(driverName){
    return driverName.slice(0, st.length) === st;
  });
}

function matchName(drivers, name) { 
  return drivers.filter(function (driver) {
    return driver.name === name; 
  })
}

// drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

// fuzzyMatch(drivers, 'Sa'); 