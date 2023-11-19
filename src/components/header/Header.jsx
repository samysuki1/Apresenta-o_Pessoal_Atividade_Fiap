import { NavLink } from "react-router-dom";
import * as S from "./Header.styles";
import { HEADER_CONFIG } from "./Header.config";

export function Header() {
  return (
    <S.Wrapper>
      <S.Title>{HEADER_CONFIG.TITLE}</S.Title>
      <S.Navbar>
        {HEADER_CONFIG.NAV.map(({ path, text }) => {
          return (
            <NavLink key={text} to={path}>
              {({ isActive }) => (
                <S.TextLink isActive={isActive}>{text}</S.TextLink>
              )}
            </NavLink>
          );
        })}
      </S.Navbar>
    </S.Wrapper>
  );
}
