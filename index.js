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

  let moneyInOrder = totalMoney.concat().sort((a, b) => a - b);
  //the problem is that sort mutates totalMoney and we do not want that
  //the largest number should be the last of the moneyOrder array but only if we sort it properly
  //go through totalMoney array to

  const allEqual = totalMoney.every(x => x === totalMoney[0]);
  // console.log(totalMoney.length);
  // console.log(allEqual);
  // console.log(students[0].name);
  if (allEqual === true && totalMoney.length == 1) {
    studentWithMost = students[0].name;
  } else if (allEqual === true && totalMoney.length > 1) {
    studentWithMost = "all";
  } else if (allEqual === false) {
    for (let i = 0; i < totalMoney.length; i++) {
      if (totalMoney[i] === moneyInOrder[moneyInOrder.length - 1]) {
        studentWithMost = students[i].name;
      }
    }
  }
  // console.log(totalMoney);
  console.log("this is money in order " + moneyInOrder);
  console.log(studentWithMost);
  return studentWithMost;
}

const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);
//the new people
const george = new Student("George", 9, 6, 7);
const sandra = new Student("Sandra", 7, 10, 5);
const anthony = new Student("Anthony", 9, 8, 2);
const matthew = new Student("Matthew", 0, 7, 4);
const kenneth = new Student("Kenneth", 2, 4, 7);
const donald = new Student("Donald", 5, 5, 9);
const dorothy = new Student("Dorothy", 8, 9, 9);
const chicken = new Student("Chicken", 6, 0, 3);
//  'Sandra', fives: 7, tens: 10, twenties: 5 },
//  name: 'Anthony', fives: 9, tens: 8, twenties: 2 },
//  name: 'Matthew', fives: 0, tens: 7, twenties: 4 },
//  name: 'Kenneth', fives: 2, tens: 4, twenties: 7 },
//  name: 'Donald', fives: 5, tens: 5, twenties: 9 },
//  name: 'Dorothy', fives: 8, tens: 9, twenties: 9 },
//  name: 'Matthew', fives: 6, tens: 0, twenties: 3 }
mostMoney([
  george,
  sandra,
  anthony,
  matthew,
  kenneth,
  donald,
  dorothy,
  chicken
]);
mostMoney([andy, stephen, eric, david, phil, cam, geoff]);
// // "What happens if one student has the most money?"
mostMoney([andy, stephen, eric, david, phil]); //, "Eric")
mostMoney([cam, geoff, andy, stephen, eric, david, phil]); //"Eric")

// "What happens if there is only one student?"
mostMoney([andy]); //"Andy")
mostMoney([stephen]); //"Stephen")

// "What happens if all students have the same amount of money?"
mostMoney([cam, geoff]); //"all")
mostMoney([david, cam, geoff]); //"all")

//maybe i still don't understand classes
