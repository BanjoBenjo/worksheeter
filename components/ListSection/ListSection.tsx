

import React, { useState } from 'react'
import ListHeading from '../ListHeading/ListHeading'
import ListCard from '../ListCard/ListCard'
import { ITaskSection } from '@/app/page'
import { CalculationTask } from '@/utils/addition'

interface item {
  id: number,
  title: string,
  example: string,
  generateTasks: () => CalculationTask[]
}

const ListSection = ({ title, items, onAddTasks }: { title: string, items: item[], onAddTasks: (ListSection: ITaskSection) => void }) => {
  const [showSection, setShowSection] = useState(false)

  const toggleList = () => {
    showSection ? setShowSection(false) : setShowSection(true)
  }

  const handleAddTasksClicked = (item: item) => {
    const tasks = item.generateTasks()
    onAddTasks({ title: item.title, items: tasks })
  }

  return (
    <div>
      <ListHeading title={title} open={showSection} onClick={toggleList} />
      {
        showSection &&
        <ul role="list" className="divide-y divide-gray-200">
          {items.map((item) => (
            <li key={item.id} className="px-4 py-3">
              <div className=' cursor-pointer' onClick={() => handleAddTasksClicked(item)}>

                <ListCard title={item.title} example={item.example} />
              </div>
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default ListSection