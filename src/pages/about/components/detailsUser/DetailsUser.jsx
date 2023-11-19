import * as S from "./Detailsuser.styles";

export function DetailsUser({ street, neighborhood, city, state }) {
  return (
    <S.Wrapper>
      <S.Paragraph>
        <span>Rua:</span> {street}
      </S.Paragraph>
      <S.Paragraph>
        <span>Bairro:</span> {neighborhood}
      </S.Paragraph>
      <S.Paragraph>
        <span>Cidade:</span> {city}
      </S.Paragraph>
      <S.Paragraph>
        <span>UF:</span> {state}
      </S.Paragraph>
    </S.Wrapper>
  );
}
