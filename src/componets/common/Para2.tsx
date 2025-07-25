import Link from 'next/link'
import { FunctionComponent } from 'react'

interface ParaProps {
  classSpan?: string
  span?: string
  linkText?: string
  linkHref?: string
  linkClass?: string
  span2?: string
}

const Para2: FunctionComponent<ParaProps> = ({
  classSpan,
  span,
  linkText = 'Click here',
  linkHref = '/',
  linkClass,
  span2,
}) => {
  return (
    <p className="flex flex-row gap-1 justify-center items-center">
      <span className={classSpan}>{span}</span>
      <Link href={linkHref} className={linkClass}>
        {linkText}
      </Link>
      <span className={classSpan}>{span2}</span>
    </p>
  )
}

export default Para2
