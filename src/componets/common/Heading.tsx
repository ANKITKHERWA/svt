import { FunctionComponent } from 'react'

interface HeadingProps {
  className: string
  heading: string
}

const Heading: FunctionComponent<HeadingProps> = ({ className, heading }) => {
  return (
    <>
      <h2 className={` ${className}`}>{heading}</h2>
    </>
  )
}

export default Heading
