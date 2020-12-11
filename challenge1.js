// Output the beer exchange outcomes
const out = (obj) => {
  const passesTo = " passes to ";
  const comma = ", ";
  let outputStr = "";
  Object.keys(obj).map((key, i) => {
    outputStr += key + passesTo + obj[key];
    if (i < Object.keys(obj).length - 1) outputStr += ", ";
  });
  return outputStr;
};

// Implements given constraints
const legitPartner = (passedTo, index, partner) => {
  if (partner === index) return false; // Cannot pass yourself
  if (passedTo.includes(partner)) return false; // No more than one passes to one person
  if (passedTo.includes(index)) {
    // Person 'a' passing to person 'b' cannot receive from person 'b'
    if (passedTo.indexOf(index) === partner) return false;
    else {
      return true;
    }
  }
  return true;
};

const getPartner = (len) => Math.round(Math.random() * len); // Get assigned a random partner for passing beer

const myArr = ["Chris", "Jason", "Kianoosh", "Raja", "Margaret"]; // Given array of people at party
let passedTo = []; // Beer from someone has been passed to these members
let beerXch = {};

for (let i = 0; i < myArr.length; i++) {
  let partner = getPartner(myArr.length - 1);
  // Enforce constraints
  while (!legitPartner(passedTo, i, partner))
    partner = getPartner(myArr.length - 1);

  // Legitimate partner found
  passedTo[i] = partner;
  beerXch[myArr[i]] = myArr[partner];
}
//console.log(beerXch); // A look at the object
console.log(out(beerXch)); // Output
