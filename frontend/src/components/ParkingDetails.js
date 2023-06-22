import { useParkingsContext } from '../hooks/useParkingsContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

<<<<<<< HEAD
const WorkoutDetails = ({ parking }) => {
  const { dispatch } = useParkingsContext()

  const handleClick = async () => {
    const response = await fetch('/api/parkings/' + parking._id, {
=======
const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useParkingsContext()

  const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
>>>>>>> 7066bdbcdcec84d9b0d0f322a27ea0483fd631e6
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
<<<<<<< HEAD
      dispatch({type: 'DELETE_PARKING', payload: json})
=======
      dispatch({type: 'DELETE_WORKOUT', payload: json})
>>>>>>> 7066bdbcdcec84d9b0d0f322a27ea0483fd631e6
    }
  }

  return (
<<<<<<< HEAD
    //Vehicle details
    <div className="parking-details">
      <h4>{parking.vnumber}</h4>
      <p><strong>Duration (Hours): </strong>{parking.duration}</p>
      <p>{formatDistanceToNow(new Date(parking.createdAt), { addSuffix: true })}</p>
=======
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Number of reps: </strong>{workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
>>>>>>> 7066bdbcdcec84d9b0d0f322a27ea0483fd631e6
      
    </div>
  )
}

<<<<<<< HEAD
export default ParkingDetails
=======
export default WorkoutDetails
>>>>>>> 7066bdbcdcec84d9b0d0f322a27ea0483fd631e6
