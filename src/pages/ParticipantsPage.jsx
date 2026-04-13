import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchParticipants, setSearchQuery } from '../store/participantsSlice';

export default function ParticipantsPage() {
  const { eventId } = useParams();
  const dispatch = useDispatch();
  const { items, loading, searchQuery } = useSelector((state) => state.participants);

  useEffect(() => {
    dispatch(fetchParticipants(eventId));
  }, [dispatch, eventId]);

  const filteredParticipants = items.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <div className="container"><h2>Chargement en cours...</h2></div>;

  return (
    <div className="container">
      <h2>Participants</h2>
      
      <input 
        type="text" 
        placeholder="Rechercher par nom ou email..." 
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        className="search-input"
      />

      <div className="event-list">
        {filteredParticipants.map(p => (
          <div key={p.id} className="card">
            <h3>{p.name}</h3>
            <p>{p.email}</p>
          </div>
        ))}
      </div>
      <Link to="/" className="back-link">← Retour aux événements</Link>
    </div>
  );
}