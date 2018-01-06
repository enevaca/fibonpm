"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fibonpm;
function fibonpm(num) {
  if (num == 1) return 0;
  if (num == 2) return 1;

  return fibonpm(num - 1) + fibonpm(num - 2);
}