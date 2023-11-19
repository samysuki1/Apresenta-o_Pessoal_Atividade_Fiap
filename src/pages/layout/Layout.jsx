import { Header, ImagePerfil } from "../../components/index";
import { Outlet } from "react-router-dom";
import * as S from "./Layout.styles";

export function Layout() {
  return (
    <S.Wrapper>
      <Header />
      <S.Section>
        <S.ContentImage>
          <ImagePerfil />
        </S.ContentImage>
        <Outlet />
      </S.Section>
    </S.Wrapper>
  );
}
