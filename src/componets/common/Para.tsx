import { FunctionComponent } from 'react'

interface ParaProps {
  className: string
  Para: string
}

const Para: FunctionComponent<ParaProps> = ({ className, Para }) => {
  return (
    <>
      <p className={` ${className}`}>{Para}</p>
    </>
  )
}

export default Para
