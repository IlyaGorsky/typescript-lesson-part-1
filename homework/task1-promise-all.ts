/*
Задание 1: Реализуйте свой Promise.all

Требования:
- Принимает список промисов
- Резолвится массивом результатов в том же порядке
- Немедленно реджектится при первой ошибке
*/

function promiseAll(promises: Array<Promise<number>>): Promise<number[]> {
  return new Promise((resolve, reject) => {
    const result: number[] = [];
    let count: number = 0;
    const total: number = promises.length;

    if (total === 0) {
      resolve([]);
      return;
    }

    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then((value: number) => {
          result[i] = value;
          count++;
          if (count === total) {
            resolve(result);
          }
        })
        .catch((error: unknown) => {
          reject(error);
        });
    });
  });
}

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);

promiseAll([p1, p2]).then(console.log); // [1, 2]
