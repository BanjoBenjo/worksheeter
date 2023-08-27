import { CalculationTask } from "./addition";

export function generateAdditionTasks({
  count,
  minNumber,
  maxNumber,
  allowOverflow,
}: {
  count: number;
  minNumber: number;
  maxNumber: number;
  allowOverflow: boolean;
}): CalculationTask[] {
  const tasks: CalculationTask[] = [];

  for (let i = 0; i < count; i++) {
    const number1 = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

    let number2: number;
    if (allowOverflow) {
      number2 = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    } else {
      number2 = Math.floor(Math.random() * (maxNumber - number1 + 1)) + minNumber;
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
