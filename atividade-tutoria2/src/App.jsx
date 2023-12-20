import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [dados, setDados] = useState()

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((res)=>{
      console.log (res.data)
      setDados(res.data)
    })
    .catch((error)=> console.log(error))
  },[])

  return (
    <>
      <div>
          <h1>{ dados? `id: ${dados.id}` : "Carregando..."}</h1>
          <h2>{ dados? `titulo: ${dados.title}` : "Carregando..."}</h2>
          <h3>{ dados? `body: ${dados.body}` : "Carregando..."}</h3>
      </div>
    </>
  )
}

export default App
