function sum(a, b) {
  if (typeof a === 'undefined') {
    return 0 + b;
  } else if (typeof b === 'undefined') {
    return a + 0;
  } else if (typeof b === 'undefined' && typeof a === 'undefined') {
    return 0;
  } else {
    return a + b;
  }
}

function subtract(a, b) {
  return;
}

function divide(a, b) {
  return;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
