import { title } from 'process'
import { FunctionComponent } from 'react'

interface HeadingProps {
  className: string
  title: string
}

const Heading: FunctionComponent<HeadingProps> = ({ className, title }) => {
  return (
    <>
      <h2 className={` ${className}`}>{title}</h2>
    </>
  )
}

export default Heading
