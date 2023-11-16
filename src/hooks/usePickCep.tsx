import { developers } from "../config/constants";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { aboutType, formacaoTypes, xpTypes } from "./usePickCep.types";

export function usePickCep() {
  const [cookies] = useCookies(["cep"]);
  const [about, setAbout] = useState<aboutType>();
  const [formacao, setFormacao] = useState<formacaoTypes>();
  const [xp, setXp] = useState<xpTypes>();
  const [hobbies, setHobbies] = useState<string[]>();

  const linkApi = `https://viacep.com.br/ws/${cookies.cep}/json/`;

  useEffect(() => {
    const dev = developers.filter(({ cep }) => cep === `${cookies.cep}`);

    fetch(linkApi)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na solicitação de GET: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setAbout({
          ...data,
          nome: dev[0].nome,
          avatar: dev[0].avatar,
          apelido: dev[0].apelido,
        });
      })
      .catch((error) => {
        setAbout(undefined);
        console.error("Erro ao buscar dados:", error);
      });

    if (cookies.cep) {
      setFormacao(dev[0].formacao);
      setXp(dev[0].xp);
      setHobbies(dev[0].hobbies);
    }
  }, [cookies.cep]);

  return { about, formacao, hobbies, xp };
}
