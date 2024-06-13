// write code here
function getInfo(name, lastName, ...hobbies) {
  return {
    name,
    lastName,
    hobbies,
    numberOfHobbies: hobbies.length
  };
}

const personInfo1 = getInfo('Alice', 'Smith', 'Drawing');
console.log(personInfo1);

const personInfo2 = getInfo('Bob', 'Johnson', 'Cooking', 'Fishing', 'Gardening');
console.log(personInfo2);

const personInfo3 = getInfo('Eve', 'Brown');
console.log(personInfo3);

