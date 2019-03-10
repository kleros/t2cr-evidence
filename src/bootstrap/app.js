import React from 'react'
import { Helmet } from 'react-helmet'

import TTCREvidence from '../iframes/t2cr-evidence'

import './app.css'

const App = () => (
  <>
    <Helmet>
      <title>Tokens on Trial</title>
    </Helmet>
    <TTCREvidence />
  </>
)

export default App
