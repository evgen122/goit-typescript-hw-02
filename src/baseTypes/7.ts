/**
 * Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
 *   і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
 *
 * @format
 */

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: Day) {
  if (day === Day.Saturday || day === Day.Sunday) {
    return false;
  } else {
    return true;
  }
}

// const today = new Date();
// const day = today.getDay();

// enum Status {
//   false,
//   true,
// }

// function isWeekend(day: number): Status {
//   if (day === 0 || day === 6) {
//     return Status.true;
//   } else {
//     return Status.false;
//   }
// }
