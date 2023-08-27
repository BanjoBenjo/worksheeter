export type CalculationTask = {
  number1: number;
  number2: number;
  operator: string;
  result: number;
};

export function generateAdditionTasks({
  count,
  maxNumber,
  allowOverflow,
}: {
  count: number;
  maxNumber: number;
  allowOverflow: boolean;
}): CalculationTask[] {
  const tasks: CalculationTask[] = [];

  for (let i = 0; i < count; i++) {
    const number1 = Math.floor(Math.random() * (maxNumber - 1)) + 1; // Generate random number between 1 and maxNumber

    let number2: number;
    if (allowOverflow) {
      number2 = Math.floor(Math.random() * (maxNumber - 1)) + 1;
    } else {
      number2 = Math.floor(Math.random() * (maxNumber - number1)) + 1; // Generate random number between 1 and (maxNumber - number1)
    }

    const operator = '+';
    const result = number1 + number2;

    const task: CalculationTask = {
      number1,
      number2,
      operator,
      result,
    };

    tasks.push(task);
  }

  return tasks;
}
