// Q54 a way to make a flexible list function
function flexibleList(key, value) {
    var obj = {};
    obj[key] = value;
    return obj;
}
// using the flexiable list setup for a users prefernce
var userPref = flexibleList("color", "blue");
console.log(userPref);
