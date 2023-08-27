import React from 'react'



const ListCard = ({ title, example }: { title: string, example: string }) => {
  return (
    <div className="flex">
      <div className="flex-auto">
        <p className="text-sm font-semibold leading-6 text-gray-900 px-2">
          {title}
        </p>
        <p className="text-sm font-normal leading-6 text-gray-900 px-2">
          {example}
        </p>
      </div>
    </div>
  )
}

export default ListCard