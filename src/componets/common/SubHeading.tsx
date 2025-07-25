import { title } from 'process'
import { FunctionComponent } from 'react'

interface SubHeadingProps {
  className: string
  title: string
}

const SubHeading: FunctionComponent<SubHeadingProps> = ({
  className,
  title,
}) => {
  return (
    <>
      <h2 className={` ${className}`}>{title}</h2>
    </>
  )
}

export default SubHeading
