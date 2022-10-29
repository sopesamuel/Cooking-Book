import React, { useState } from 'react'
import ListRecipe from '../../components/ListRecipe'
// import { useFetch } from '../../hooks/useFetch'
import './Home.css'
import { projectFirestore } from '../../firebase/Config'
import { useEffect } from 'react'

export default function Home() {
    // const {data, isPending, error} = useFetch('http://localhost:7000/recipes')
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(()=>{
      setIsPending(true)
      projectFirestore.collection('recipes').get().then((snapshot) => {
       if (snapshot.empty){
        setError('No recipes to load')
        setIsPending(false)
       } else {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({ id: doc.id, ...doc.data() })
        })
        setData(results)
        setIsPending(false)
       }
      })
    }, [])

  return (
    <div className='home'>
    {error && <p className='error'>{error}</p>}
    {isPending && <p className='loading'>Loading...</p>}
    {data && <ListRecipe recipes={data}/>}
    </div>
  )
}
