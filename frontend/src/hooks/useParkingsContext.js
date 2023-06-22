import { ParkingsContext } from "../context/ParkingsContext"
import { useContext } from "react"

export const useWorkoutsContext = () => {
  const context = useContext(ParkingsContext)

  if(!context) {
    throw Error('useWorkoutsContext must be used inside a WorkoutsContextProvider')
  }

  return context
}