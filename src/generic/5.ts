/**
 * Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення.
 *   Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
 *
 * @format
 */

interface KeyValuePair {
  key;
  value;
}

class example {
  constructor(key: [KeyValuePair["key"]], value: [KeyValuePair["value"]]) {}
}

export {};
