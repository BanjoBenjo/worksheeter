import React, { useEffect, useState } from 'react'
import { ITaskSection } from '@/app/page'
import dynamic from 'next/dynamic'

const PDFDocument = dynamic(() => import('../PDFDocument/PDFDocument'), { ssr: false })

const PDFView = ({ tasks }: { tasks: ITaskSection[] }) => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);
  return (
    <PDFDocument tasks={tasks} />
  )
}

export default PDFView