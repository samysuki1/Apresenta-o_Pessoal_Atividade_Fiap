import { usePickCep } from "../hooks/usePickCep";
import { EmptyPage } from "./EmptyPage";

export function Formacao() {
  const { formacao, about } = usePickCep();

  return (
    <section className="flex fle-col w-full h-[65vh]">
      {formacao && about ? (
        <div className="flex w-full py-20">
          <div className="flex-1 flex justify-end px-10">
            <img
              className="rounded-full text-end"
              src={about.avatar}
              alt="imagem de perfil"
            />
          </div>
          <div className="flex-1 flex flex-col px-10 gap-5">
            <h2 className="font-bold text-2xl">Formação</h2>
            <div className="space-y-3">
              <p>
                <span className="font-bold">Instituição:</span> {formacao.escola}
              </p>
              <p>
                <span className="font-bold">Curso:</span> {formacao.curso}
              </p>
              <p>
                <span className="font-bold">Duração:</span> {formacao.tempo}
              </p>
              <p>
                <span className="font-bold">Início:</span> {formacao.inicio}
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
