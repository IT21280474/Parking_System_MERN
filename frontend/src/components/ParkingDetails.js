import { useParkingsContext } from '../hooks/useParkingsContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ parking }) => {
  const { dispatch } = useParkingsContext()

  const handleClick = async () => {
    const response = await fetch('/api/parkings/' + parking._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_PARKING', payload: json})
    }
  }

  return (
    <div className="parking-details">
      <h4>{parking.vnumber}</h4>
      <p><strong>Duration (Hours): </strong>{parking.duration}</p>
      <p>{formatDistanceToNow(new Date(parking.createdAt), { addSuffix: true })}</p>
      
    </div>
  )
}

export default ParkingDetails