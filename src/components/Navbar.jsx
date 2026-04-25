export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo">
        <span className="text-gradient">FlexFit</span>
      </a>
      <div className="navbar-links">
        <a href="#program">Program</a>
        <a href="#rules">Rules</a>
        <a href="#workouts">Workouts</a>
        <button className="navbar-cta">Menu</button>
      </div>
    </nav>
  );
}
