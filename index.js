class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

//thi worked not so badly but it's not completely correct and I don't know how to test it
function mostMoney(students) {
  // your code here
  //it looks like they are arrays nested with objects
  //so i think i can loop through this
  //everyone's money
  let totalMoney = [];
  let studentWithMost = null;
  for (let i = 0; i < students.length; i++) {
    totalMoney.push(
      students[i].fives * 5 + students[i].tens * 10 + students[i].twenties * 20
    );
  }

  let moneyInOrder = totalMoney.concat().sort();
  //the problem is that sort mutates totalMoney and we do not want that
  //the largest number should be the last of the moneyOrder array but only if we sort it properly
  //go through totalMoney array to
  for (let i = 0; i < totalMoney.length; i++) {
    if (totalMoney[i] === moneyInOrder[moneyInOrder.length - 1]) {
      studentWithMost = students[i].name;
    }
  }
  console.log(totalMoney);
  console.log(moneyInOrder);

  return studentWithMost;
}

const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);

mostMoney(andy, stephen, eric, david, phil, cam, geoff);

//maybe i still don't understand classes
