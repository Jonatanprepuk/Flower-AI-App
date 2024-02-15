import React, {useState, useEffect} from 'react'

import ImageUpload from './ImageUpload'

function App() {

  const [prediction, setPrediction] = useState('')

  return (
    <div>
      <ImageUpload />
    </div>
  )
}

export default App