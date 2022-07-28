import { useState } from 'react'
import './NewEventForm.css'

export default function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('Kütahya')

  // const handleChange = (e) => {
  //   setTitle(e.target.value)
  // }

  const resetForm = () => {
    setTitle('')
    setDate('')
    setLocation('Kütahya')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const event = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 10000)
    }
    addEvent(event)
    resetForm()
  }
 
  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} required/>
      </label>
      <label>
        <span>Event Date:</span>
        <input type="date" onChange={(e) => setDate(e.target.value)} value={date} required/>
      </label>
      <label>
        <span>Event Location:</span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="Kütahya">Kütahya</option>
          <option value="Eskişehir">Eskişehir</option> 
          <option value="Ankara">Ankara</option>
          <option value="İzmir">İzmir</option>
        </select>
      </label>
      <button>Submit</button>      
    </form>
  )
}