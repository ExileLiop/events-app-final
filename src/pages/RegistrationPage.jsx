import { useParams, useNavigate } from 'react-router-dom';

export default function RegistrationPage() {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inscription réussie!");
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Inscription à l'événement #{eventId}</h2>
      <form onSubmit={handleSubmit} className="card">
        <label>Nom complet</label>
        <input type="text" required />
        
        <label>E-mail</label>
        <input type="email" required />
        
        <label>Date de naissance</label>
        <input type="date" required />
        
        <button type="submit" className="register-btn">S'inscrire</button>
      </form>
    </div>
  );
}