"strict mode";

export default class Family {
  constructor(familyName, motherName, numChild) {
    this.familyName = familyName;
    this.motherName = motherName;
    this.numChild = numChild;
  }
}

export function printName(Family) {
  console.log(`This family's name is ${Family.familyName}`);
}

export function printNum(Family) {
  console.log(Family.numChild);
}
