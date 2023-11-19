import { HOBBIES_CONFIG } from "./Hobbies.config";
import * as S from "./Hobbies.styles";

export function Hobbies() {
  return (
    <S.Wrapper>
      <S.Title>{HOBBIES_CONFIG.TITLE}</S.Title>
      <S.Content>
        {HOBBIES_CONFIG.DATA.map((hobbie) => (
          <S.Paragraph key={hobbie}>• {hobbie}</S.Paragraph>
        ))}
      </S.Content>
    </S.Wrapper>
  );
}
