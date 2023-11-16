import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();
  let errorMessage: string | undefined ;

  if (isRouteErrorResponse(error)) {
    errorMessage = (error as unknown as Error)?.message || (error as { statusText?: string })?.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    errorMessage = "Unknown error";
  }

  return (
    <div
      id="error-page"
      className="flex flex-col gap-8 justify-center items-center h-screen"
    >
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>Desculpa, um erro inesperado ocorreu.</p>
      <p className="text-slate-400">
        <i>ERROR: {errorMessage}</i>
      </p>
    </div>
  );
}
