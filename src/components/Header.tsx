import { useCookies } from "react-cookie";
import { Navbar } from "./Navbar";
import { usePickCep } from "../hooks/usePickCep";

export function Header() {
  const [cookies, setCookie] = useCookies<string>(["cep"]);
  const { about } = usePickCep();

  const handleSubmit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setCookie("cep", e.target.value);
  };

  const isNotActive = !cookies.cep || cookies.cep === "undefined";

  return (
    <header className="flex items-center bg-primary text-secondary h-20">
      <h1 className="flex-1 text-3xl px-10">
        {`</>`} Dev{about?.apelido || "Alguém"}
      </h1>
      <div className="flex-1 flex gap-5">
        {!isNotActive && <Navbar />}
        <form>
          <select
            className="text-primary"
            value={cookies.cep}
            onChange={handleSubmit}
          >
            <option value="" selected>
              Selecione um Perfil
            </option>
            <option value="05822010">Samantha</option>
            <option value="01426001">Mainan</option>
          </select>
        </form>
      </div>
    </header>
  );
}
