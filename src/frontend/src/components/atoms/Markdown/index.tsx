import React from 'react'
import unified from 'unified'
import parse from 'remark-parse'
// @ts-ignore
import remark2react from 'remark-react'

type Props = {
  markdown: string
}

const Markdown: React.FC<Props> = ({ markdown }) => {
  return (
    // @ts-ignore
    <>{unified().use(parse).use(remark2react).processSync(markdown).result}</>
  )
}

export default Markdown
