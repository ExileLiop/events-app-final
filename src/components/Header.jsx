function Header({ search, setSearch }) {
  return (
    <header className="header">
      <h1>Conférences de Psychologie</h1>
      <input
        type="text"
        placeholder="Rechercher des événements..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </header>
  );
}

export default Header;