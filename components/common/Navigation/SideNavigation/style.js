import { theme, styled } from 'twin.macro';

export const SideNavigationContainer = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: ${theme`variables.side-navigation-width`};
  background-color: ${theme`colors.gray_222222`};
`;

export const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 15px 25px 20px;

  color: ${theme`colors.white`};
  overflow: auto;
`;

export const BottomWrap = styled.div`
  margin-top: auto;
`;

// export const
