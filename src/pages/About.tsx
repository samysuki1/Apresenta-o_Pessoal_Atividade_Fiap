import { usePickCep } from "../hooks/usePickCep";
import { EmptyPage } from "./EmptyPage";

export function About() {
  const { about } = usePickCep();
  return (
    <section className="flex fle-col w-full h-[65vh]">
      {about ? (
        <div className="flex w-full py-20">
          <div className="flex-1 flex justify-end px-10">
            <img
              className="rounded-full text-end"
              src={about.avatar}
              alt="imagem de perfil"
            />
          </div>
          <div className="flex-1 flex flex-col px-10 gap-5">
            <h2 className="font-bold text-2xl">Sobre mim</h2>
            <div className="space-y-3">
              <p>{about.nome}</p>
              <p>
                <span className="font-bold">Endereço:</span> {about.logradouro}
              </p>
              {about.complemento && (
                <p>
                  <span className="font-bold">Complemento:</span>{" "}
                  {about.complemento}
                </p>
              )}
              <p>
                <span className="font-bold">Bairro:</span> {about.bairro}
              </p>
              <p>
                <span className="font-bold">CEP:</span> {about.cep}
              </p>
              <p>
                <span className="font-bold">Cidade:</span> {about.localidade}
              </p>
              <p>
                <span className="font-bold">DDD:</span> {about.ddd}
              </p>
              <p>
                <span className="font-bold">Estado:</span> {about.uf}
              </p>
              <p>
                <span className="font-bold">GIA:</span> {about.gia}
              </p>
              <p>
                <span className="font-bold">IBGE:</span> {about.ibge}
              </p>
              <p>
                <span className="font-bold">SIAFI:</span> {about.siafi}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <EmptyPage />
      )}
    </section>
  );
}
