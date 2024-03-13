
import { useState } from 'react'
import './App.css'
import Cards from './component/Cards/Cards'
import { useEffect } from 'react'


function App() {

  const [books,setBooks] = useState([])

  useEffect(()=>{
    fetch('booksData.json')
    .then(res=>res.json())
    .then(data=> setBooks(data))
  },[])

  return (
    <>
    <main className='container mx-auto'>
       <h1 className='text-5xl font-bold text-center text-teal-400 my-8'>Book Store</h1>

        <Cards books={books}></Cards>
     
  </main>
      
     
    </>
  )
}

export default App
