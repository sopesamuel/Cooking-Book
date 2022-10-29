import React from 'react'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

import ListRecipe from '../../components/ListRecipe'

export default function Search() {

const queryString = useLocation().search
const queryParams = new URLSearchParams(queryString)
const query = queryParams.get('q')

const url = 'http://localhost:7000/recipes?q=' + query
const {error, isPending, data} = useFetch(url)

  return (
    <div>
        <h2 className='page-title'>Recipes Including "{query}"</h2>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>Loading....</p>}
        {data && <ListRecipe recipes={data} />}
    </div>
  )
}
