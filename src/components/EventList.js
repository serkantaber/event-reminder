import styles from './EventList.module.css'

export default function EventList({events, handleClick}) {
    return (
        <>
          {events.map((event) => (
            <div key={event.id} className={styles.card}>
              <h2>{event.title}</h2>
              <p>{event.location} - {event.date}</p>
              <button onClick={() => handleClick(event.id)}>Delete Event</button>
            </div>
          ))}
        </>
    )
}