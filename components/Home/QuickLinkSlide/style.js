import { theme, styled } from 'twin.macro';

export const Container = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
`;

export const TitleWrap = styled.div`
  padding: 0 30px;
`;
export const Title = styled.h3`
  font: ${theme`typography.h_24`};
  color: ${theme`colors.gray_3b3b3b`};
`;
export const SubTitle = styled.p`
  margin-top: 10px;
  font: ${theme`typography.b_15`};
  color: ${theme`colors.gray_888888`};
`;
