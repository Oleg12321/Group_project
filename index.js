
// const stringChecker = function (s, p1, p2) {
//     const dp = Array.from({ length: p1.length + 1 }, () => Array.from({ length: p2.length + 1 }, () => false));

//     // Порожні рядки можна сформувати без будь-яких символів з p1 та p2
//     dp[0][0] = true;

//     for (let i = 0; i <= p1.length; i++) {
//         for (let j = 0; j <= p2.length; j++) {
//             const k = i + j;

//             // Перевіряємо, чи символ k з рядка S можна сформувати
//             if (i > 0 && s[k] === p1[i - 1]) {
//                 dp[i][j] = dp[i][j] || dp[i - 1][j];
//             }
//             if (j > 0 && s[k] === p2[j - 1]) {
//                 dp[i][j] = dp[i][j] || dp[i][j - 1];
//             }
//         }
//     }

//     // Результатом є значення в останній комірці dp, яке показує, чи можна сформувати рядок S
//     return dp[p1.length][p2.length];
// };

// // Приклад виклику функції
// console.log(stringChecker("L39A18k99MJ9IIkQxlI", "L199MIIkxl", "39A8kJ9QI")); // Виведе: false

// const stringChecker = function (s, p1, p2) {
//     let idxS = 0;
//     let idxP1 = 0;
//     let idxP2 = 0;

//     while (idxS < s.length) {
//         if (idxP1 < p1.length && s[idxS] === p1[idxP1]) {
//             idxS++;
//             idxP1++;
//         } else if (idxP2 < p2.length && s[idxS] === p2[idxP2]) {
//             idxS++;
//             idxP2++;
//         } else {
//             return false;
//         }
//     }

//     return idxP1 === p1.length && idxP2 === p2.length;
// };

// // Example function call
// console.log(stringChecker("L39A18k99MJ9IIkQxlI", "L199MIIkxl", "39A8kJ9QI")); // Output: false

function stringChecker(s, p1, p2) {
  return !s ? !(p1 || p2) :
    s[0] == p1[0] && stringChecker(s.slice(1), p1.slice(1), p2) ||
    s[0] == p2[0] && stringChecker(s.slice(1), p1, p2.slice(1));
}

console.log(stringChecker("radency", "rade", "ncy"));















