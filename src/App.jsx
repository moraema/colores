import { useState } from 'react'
import Values from 'values.js'
import './App.css'
import DisplayColors from './componentes/DisplayColors';
import FormColor from './componentes/FormColor';

function App() {
  const [list, setList] = useState(new Values('#802FDE').all(5));

  return (
    <div className="App">
      <FormColor setList={setList} />
      <DisplayColors list={list}/>
    </div>
  )
}

export default App