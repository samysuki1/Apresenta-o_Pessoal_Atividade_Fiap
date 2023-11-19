import { EXPERIENCE_CONFIG } from "./Experience.config";
import * as S from "./Experience.styles";

export function Experience() {
  return (
    <S.Wrapper>
      <S.Title>{EXPERIENCE_CONFIG.TITLE}</S.Title>
      <S.Content spacing={4}>
        <S.Paragraph>
          <span>Empresa:</span> {EXPERIENCE_CONFIG.DATA.COMPANY}
        </S.Paragraph>
        <S.Paragraph>
          <span>Cargo:</span> {EXPERIENCE_CONFIG.DATA.ROLE}
        </S.Paragraph>
        <S.Content spacing={2}>
          <S.SubTitle>{EXPERIENCE_CONFIG.DATA.DESCRIPTION.TITLE}</S.SubTitle>
          {EXPERIENCE_CONFIG.DATA.DESCRIPTION.DATA.map((item) => (
            <S.Paragraph key={item}>• {item}</S.Paragraph>
          ))}
        </S.Content>
        <S.Content spacing={2}>
          <S.SubTitle>{EXPERIENCE_CONFIG.DATA.STACKS.TITLE}</S.SubTitle>
          {EXPERIENCE_CONFIG.DATA.STACKS.DATA.map((item) => (
            <S.Paragraph key={item}>• {item}</S.Paragraph>
          ))}
        </S.Content>
      </S.Content>
    </S.Wrapper>
  );
}
