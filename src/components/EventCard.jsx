import { useNavigate } from 'react-router-dom';

function EventCard({ id, title, description, date, organizer }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><b>Date:</b> {date}</p>
      <p><b>Organizer:</b> {organizer}</p>
      <button className="register-btn" onClick={() => navigate(`/register/${id}`)}>
        S'inscrire
      </button>
      <div className="buttons">
        <button onClick={() => navigate(`/participants/${id}`)}>Voir</button>
      </div>
    </div>
  );
}
export default EventCard;