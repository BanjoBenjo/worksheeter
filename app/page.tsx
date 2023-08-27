'use client'

import ListSection from "@/components/ListSection/ListSection"
import { CalculationTask, generateAdditionTasks } from "@/utils/addition";
import { useState } from "react";
import { generateSubtractionTasks } from "@/utils/subtraction";
import PDFView from "@/components/PDFView/PDFView";


export interface ITaskSection {
  title: string,
  items: CalculationTask[]
}

export default function Home() {

  const [tasks, setTasks] = useState<ITaskSection[]>([])

  const additionItems = [
    {
      id: 1, title: "Addition   10", example: "1 + 1 = 2", generateTasks: () => generateAdditionTasks({ count: 5, maxNumber: 10, allowOverflow: false })
    },
    {
      id: 2, title: "Addition  100", example: "34 + 12 = 46", generateTasks: () => generateAdditionTasks({ count: 5, maxNumber: 100, allowOverflow: false })
    },
    {
      id: 3, title: "Addition 1000", example: "134 + 640 = 774", generateTasks: () => generateAdditionTasks({ count: 5, maxNumber: 1000, allowOverflow: false })
    },
  ]

  const subtraktionItems = [
    {
      id: 1, title: "Subtraktion   10", example: "7 - 4 = 3", generateTasks: () => generateSubtractionTasks({ count: 5, maxNumber: 10, allowNegative: false })
    },
    {
      id: 2, title: "Subtraktion  100", example: "45 - 12 = 33", generateTasks: () => generateSubtractionTasks({ count: 5, maxNumber: 100, allowNegative: false })
    },
    {
      id: 3, title: "Subtraktion  1000", example: "762 - 33 = 729", generateTasks: () => generateSubtractionTasks({ count: 5, maxNumber: 1000, allowNegative: false })
    },
  ]

  const handleAddTasks = (taskSection: ITaskSection) => {
    setTasks([...tasks, taskSection])
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <PDFView tasks={tasks} />
      </div>
      <div className="overflow-hidden bg-white shadow">
        <ListSection title={"Addition"} items={additionItems} onAddTasks={handleAddTasks} />
        <ListSection title={"Subtraktion"} items={subtraktionItems} onAddTasks={handleAddTasks} />
      </div>
    </div>
  )
}