import React from 'react'
import Link from 'gatsby-link'

const NewPage = () => (
  <div>
    <h1>Hi Cris</h1>
    <p>Now go build something great.</p>
    <p><Link to="/page-2/">Go to page 2</Link></p>

    <p><Link to="/new-page/">Go to New Page</Link></p>
  </div>
)

export default NewPage
