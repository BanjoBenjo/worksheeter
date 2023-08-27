import { ITaskSection } from '@/app/page';
import { CalculationTask } from '@/utils/addition';
import React from 'react';

function TaskSection({ title, tasks }: { title: String, tasks: CalculationTask[] }) {
  return (
    <div>
      <h2>{title}</h2>
      {tasks.map((task, index) => (
        <div key={index}>
          <p>{`${task.number1} ${task.operator} ${task.number2} = ${task.result}`}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskSection;