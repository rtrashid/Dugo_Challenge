// the input could also be read from a csv file.  Here it is hard-coded.
let input = `a,6
b,2
c,8
d,9`;

let mainArray = [];
for (let element of input.split("\n")) {
  let temp = element.split(",");
  temp[1] = parseInt(temp[1]);
  mainArray.push(temp);
}

console.log(mainArray);
