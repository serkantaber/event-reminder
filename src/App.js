import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)

  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false)
  }

  const handleClose = () => {
    setShowModal(false);
  }

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((eventID) => {
        return id !== eventID.id
      })
    })
  }

  const subtitle = "All the events that you need to attend."

  return (
    <div className="App">
      <Title title="EventReminders" subtitle={subtitle} />

      {showEvents &&(
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}

      {!showEvents &&(
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}

      {showEvents && <EventList events={events} handleClick={handleClick}>

      </EventList>}

      {showModal && <Modal handleClose={handleClose}>
        <NewEventForm addEvent={addEvent} />
      </Modal>}
      
      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;
