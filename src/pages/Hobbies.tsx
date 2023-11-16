import { usePickCep } from "../hooks/usePickCep";
import { EmptyPage } from "./EmptyPage";

export function Hobbies() {
  const { hobbies, about } = usePickCep();

  return (
    <section className="flex fle-col w-full h-[65vh]">
      {hobbies && about ? (
        <div className="flex w-full py-20">
          <div className="flex-1 flex justify-end px-10">
            <img
              className="rounded-full text-end"
              src={about.avatar}
              alt="imagem de perfil"
            />
          </div>
          <div className="flex-1 flex flex-col px-10 gap-5">
            <h2 className="font-bold text-2xl">Hobbies</h2>
            <div className="space-y-2">
              {hobbies.map((hobbie) => (
                <p>• {hobbie}</p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <EmptyPage />
      )}
    </section>
  );
}
