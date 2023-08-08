function createValidator(
  number: number,
  mode: string = "Max"
): ((value: number) => boolean) | undefined {
  if (mode === "Max") {
    return (value: number) => value < number;
  } else if (mode === "Min") {
    return (value: number) => value > number;
  }
}

const isBelowMax = createValidator(31);

console.log(isBelowMax!(15));
console.log(isBelowMax!(32));
