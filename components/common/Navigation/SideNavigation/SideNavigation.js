import Header from './Header';
import Menu from './Menu';
import LogoutButton from './LogoutButton';

import * as Styled from './style';

export default function SideNavigation() {
  return (
    //TODO: z-index 테마로 정의필요
    <Styled.SideNavigationContainer tw="z-[1000]">
      <Styled.InnerWrap>
        <Header />
        <Menu />
        <Styled.BottomWrap>
          <LogoutButton />
        </Styled.BottomWrap>
      </Styled.InnerWrap>
    </Styled.SideNavigationContainer>
  );
}
