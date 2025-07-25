import { FunctionComponent } from 'react'

interface SubHeadingProps {
  className: string
  subheading: string
}

const SubHeading: FunctionComponent<SubHeadingProps> = ({
  className,
  subheading,
}) => {
  return (
    <>
      <h2 className={` ${className}`}>{subheading}</h2>
    </>
  )
}

export default SubHeading
