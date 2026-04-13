import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleRegistration, toggleFavorite } from '../store/eventsSlice';

export default function HomePage() {
  const items = useSelector((state) => state.events.items);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>Événements</h1>
        <Link to="/analytics" className="view-btn" style={{ padding: '8px 15px', textDecoration: 'none' }}>
          📊 Analytics
        </Link>
      </div>

      <div className="event-list">
        {items.map((event) => (
          <div key={event.id} className="card">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            
            <div className="info-text">
              <b>Date :</b> {event.date}<br/>
              <b>Organisateur :</b> {event.organizer}
            </div>

            <button 
              className="register-btn"
              onClick={() => dispatch(toggleRegistration(event.id))}
              style={{ backgroundColor: event.registered ? '#444' : '#4caf50' }}
            >
              {event.registered ? "Se désinscrire" : "S'inscrire"}
            </button>

            <div className="footer-buttons" style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
              <button 
                className="heart-btn" 
                onClick={() => dispatch(toggleFavorite(event.id))}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  fontSize: '20px', 
                  cursor: 'pointer',
                  filter: event.isFavorite ? 'none' : 'grayscale(100%)' 
                }}
              >
                {event.isFavorite ? '❤️' : '🤍'}
              </button>
              <Link to={`/participants/${event.id}`} className="view-btn" style={{ flex: 1, textAlign: 'center', textDecoration: 'none' }}>
                Voir
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}