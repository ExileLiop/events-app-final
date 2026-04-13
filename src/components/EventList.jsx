import EventCard from "./EventCard";

function EventList({ events, favorites, toggleFavorite, registered, toggleRegister }) {
  return (
    <div className="event-list">
      {events.map(event => (
        <EventCard
          key={event.id}
          {...event}
          isFavorite={favorites.includes(event.id)}
          toggleFavorite={toggleFavorite}
          isRegistered={registered.includes(event.id)}
          toggleRegister={toggleRegister}
        />
      ))}
    </div>
  );
}

export default EventList;