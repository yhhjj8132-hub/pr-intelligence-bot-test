function isAdult(age) {
  if (typeof age !== "number" || !Number.isFinite(age)) {
    throw new TypeError("age must be a finite number");
  }

  if (age < 0) {
    throw new RangeError("age must be non-negative");
  }

  return age >= 18;
}

module.exports = { isAdult };
