//our-domain.com

import { Fragment } from "react"
import Link from 'next/link'

function HomePage() {
  return (
    <Fragment>
      <ul>
        <li>Next JS</li>
        <li><Link href="/news/newsone">First news item</Link></li>
      </ul>
    </Fragment>
  )
}

export default HomePage