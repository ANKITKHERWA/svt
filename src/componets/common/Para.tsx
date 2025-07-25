import { title } from 'process'
import { FunctionComponent } from 'react'

interface ParaProps {
  className: string
  title: string
}

const Para: FunctionComponent<ParaProps> = ({ className, title }) => {
  return (
    <>
      <p className={` ${className}`}>{title}</p>
    </>
  )
}

export default Para
