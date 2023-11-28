/**
 * У вас є функція merge, яка поєднує два об'єкти.
 *   Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
 *
 * @format
 */

function merge<T extends Object, N extends Object>(objA: T, objB: N) {
  return Object.assign(objA, objB);
}

export {};
