// react-customer2/src/App.jsx
import { useEffect, useState } from 'react';
function App() {
  const [msg, setMsg] = useState('');
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);
  return <div>{msg}</div>;
}
export default App;
