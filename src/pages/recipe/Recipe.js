import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { projectFirestore } from '../../firebase/Config'
// import { useFetch } from '../../hooks/useFetch'

import './Recipe.css'

export default function Recipe() {
    const {id} = useParams()
    // const url = 'http://localhost:7000/recipes/' + id
    // const {data: recipe, isPending, error} = useFetch(url)

    const [recipe, setRecipe] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
      setIsPending(true)

      projectFirestore.collection('recipes').doc(id).get().then((doc) =>{
        if (doc.exists){
          setIsPending(false)
          setRecipe(doc.data())

        }else{
          setIsPending(false)
          setError('Could not find recipe')
        }
      })
    }, [])


  return (
    <div className='recipe'>

        {error && <p className='error'>{error}</p>}

        {isPending && <p className='loading'>Loading...</p>}

        {recipe && (
        <div>
        <h2 className='page-title'>{recipe.title}</h2>
        <p>Takes {recipe.cookingTime} to prepare.</p>
        <ul>
        {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
        </ul>
        
        <p className='method'>{recipe.method}</p>

        </div>
        )}
    </div>
  )
}

