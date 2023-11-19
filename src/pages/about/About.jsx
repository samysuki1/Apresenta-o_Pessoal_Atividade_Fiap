import { useState } from "react";
import { useFetchCep } from "../../hook/useFetchCep";
import * as S from "./About.styles";
import { DetailsUser } from "./components/detailsUser/DetailsUser";
import { Button, Skeleton } from "../../components/index";
import { ABOUT_CONFIG } from "./About.config";

export function About() {
  const [data, setData] = useState({
    logradouro: "",
    bairro: "",
    localidade: "",
    uf: "",
  });

  const { getCep, isLoading } = useFetchCep();

  return (
    <S.Wrapper>
      <S.Title>{ABOUT_CONFIG.TITLE}</S.Title>
      <S.Description>{ABOUT_CONFIG.DESCRIPTION}</S.Description>
      <S.SearchContent>
        <S.Paragraph>
          <span>CEP:</span> {ABOUT_CONFIG.CEP}
        </S.Paragraph>
        <Button onClick={() => getCep(ABOUT_CONFIG.CEP, setData)}>
          {ABOUT_CONFIG.BUTTON_TEXT}
        </Button>
      </S.SearchContent>
      {!isLoading ? (
        data.bairro && (
          <DetailsUser
            street={data["logradouro"]}
            neighborhood={data["bairro"]}
            city={data["localidade"]}
            state={data["uf"]}
          />
        )
      ) : (
        <>
          <Skeleton width="50%" />
          <Skeleton width="30%" />
          <Skeleton width="30%" />
          <Skeleton width="15%" />
        </>
      )}
    </S.Wrapper>
  );
}
