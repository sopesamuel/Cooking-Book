import { useState, useRef, useEffect} from 'react'
import './Create.css'
import { useFetch } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'


export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredient, setIngredient] = useState([])
  const ingredientInput = useRef(null)
  const history = useNavigate()


 
const { postData, data, error } = useFetch('http://localhost:7000/recipes', 'POST')

  const handleSubmit = (e) =>{
    e.preventDefault()
    // console.log(title, method, cookingTime, ingredient)
    postData({title, ingredient, method, cookingTime: cookingTime + 'minutes' })
  }



  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim();
    if(ing && !ingredient.includes(ing)){
    setIngredient(prevIngredient => [...prevIngredient, newIngredient])
}
 setNewIngredient('')
 ingredientInput.current.focus()
  }

useEffect(()=> {
  if(data){
    history('/')
  }
}, [data])

  return (
    <div className='create'>
    <h2 className='page-title'>Add a New Recipe</h2>

    <form onSubmit={handleSubmit}>
      <label>
         <span>Cooking Title:</span>
         <input
          type="text"
          onChange={(e)=>setTitle(e.target.value)}
          value={title}
          required
         />
      </label>

      <label>
        <span>Cooking Method:</span>
        <textarea 
          onChange={(e) => setMethod(e.target.value)}
          value={method}
          required
        />
      </label>


      <label>
      <span>Ingredients:</span>
      <div className='ingredients'>
      <input 
      type="text"
      onChange={(e) => setNewIngredient(e.target.value)}
      value={newIngredient}
      ref={ingredientInput}
      />
      <button onClick={handleAdd} className='btn'>Add</button>
      </div>
      </label>

      <p>current ingredients: {ingredient.map(prevIngredient => <em key={prevIngredient}>{prevIngredient}, </em>)}</p>
     

      <label>
        <span>Cooking Time:</span>
        <input 
          type="number"
          onChange={(e) => setCookingTime(e.target.value)}
          value={cookingTime}
          required
        />
      </label>

      <button className='btn'>Submit</button>
    </form>
    </div>
  )
}
