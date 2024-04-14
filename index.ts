// Q54 a way to make a flexible list function
function flexibleList(key : string, value : string){
    let obj : any = {};
    obj[key] = value;
    return obj;
}
// using the flexiable list setup for a users prefernce
let userPref = flexibleList("color", "blue");
console.log(userPref);




