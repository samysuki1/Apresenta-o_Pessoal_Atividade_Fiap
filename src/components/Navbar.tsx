import { NavLink } from "react-router-dom";

export function Navbar() {
  const style =
    "border-b-2 border-primary hover:border-b-2 hover:border-secondary";
  const styleActive = "border-b-2";

  return (
    <nav className="flex gap-3">
      <NavLink
        className={({ isActive }) => (isActive ? styleActive : style)}
        to="/"
      >
        Sobre mim
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styleActive : style)}
        to="/formacao"
      >
        Formação
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styleActive : style)}
        to="/xp"
      >
        Experiências
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styleActive : style)}
        to="/hobbies"
      >
        Hobbies
      </NavLink>
    </nav>
  );
}
