export function EmptyPage() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-[80vh] w-full">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>Desculpa, nenhum perfil selecionado.</p>
      <p className="text-slate-400">
        <i>Selecione um Perfil</i>
      </p>
    </div>
  );
}
