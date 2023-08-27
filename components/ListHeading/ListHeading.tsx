import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import React from 'react'



const ListHeading = ({ title, open, onClick }: { title: string, open: boolean, onClick: () => void }) => {
  return (
    <div className="flex px-4 py-3 bg-slate-200 cursor-pointer" onClick={onClick}>
      <div className="flex-auto">
        <p className="text-sm font-semibold leading-6 text-gray-900 px-2">
          {title}
        </p>
      </div>
      {open ? <ChevronUpIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" /> :
        <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
      }
    </div>
  )
}

export default ListHeading