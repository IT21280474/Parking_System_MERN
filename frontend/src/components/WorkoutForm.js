import { useState } from 'react'
import { useParkingsContext } from '../hooks/useParkingsContext'

const ParkingForm = () => {
  const { dispatch } = useParkingsContext()

  const [vnumber, setVnumber] = useState('')
  const [duration, setDuration] = useState('')
  
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = {vnumber, duration}
    
    const response = await fetch('/api/parkings', {
      method: 'POST',
      body: JSON.stringify(parking),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      setVnumber('')
      setDuration('')
      
      dispatch({type: 'CREATE_PATKING', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Parking Vehicle</h3>

      <label>Vehicle Number:</label>
      <input 
        type="String" 
        onChange={(e) => setVnumber(e.target.value)} 
        value={vnumber}
        className={emptyFields.includes('vnumber') ? 'error' : ''}
      />

      <label>Duration:</label>
      <input 
        type="number" 
        onChange={(e) => setDuration(e.target.value)} 
        value={duration}
        className={emptyFields.includes('duration') ? 'error' : ''}
      />


      <button>Add Parking Vehicle</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default ParkingForm