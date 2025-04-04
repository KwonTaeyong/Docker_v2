// src/App.jsx
import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => {
        console.error(err);
        setMessage('Error fetching data');
      })
  }, [])

  return (
    <div>
      <h1>Customer 1</h1>
      <p>{message}</p>
    </div>
  )
}

export default App
