import { usePickCep } from "../hooks/usePickCep";
import { EmptyPage } from "./EmptyPage";

export function Xp() {
  const { xp, about } = usePickCep();

  return (
    <section className="flex fle-col w-full h-[65vh]">
      {xp && about ? (
        <div className="flex w-full py-20">
          <div className="flex-1 flex justify-end px-10">
            <img
              className="rounded-full text-end"
              src={about.avatar}
              alt="imagem de perfil"
            />
          </div>
          <div className="flex-1 flex flex-col px-10 gap-5">
            <h2 className="font-bold text-2xl">Experiências</h2>
            <div className="space-y-3">
              <p><span className="font-bold">Empresa:</span> {xp.empresa}</p>
              <p><span className="font-bold">Cargo:</span> {xp.cargo}</p>
              <div>
                <p className="font-bold">Descrição das atividades:</p>
                {xp.descricao.map((item) => (
                  <p>• {item}</p>
                ))}
              </div>
              <div>
                <p className="font-bold">Ferramentas utilizadas:</p>
                {xp.stacks.map((item) => (
                  <p>• {item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyPage />
      )}
    </section>
  );
}
