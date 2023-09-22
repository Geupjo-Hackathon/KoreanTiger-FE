import { theme, styled } from 'twin.macro';

export const HeaderContainer = styled.div`
  padding: 0 35px;
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  border-bottom: 1px solid ${theme`colors.gray_eeeeee`};
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const TextWrap = styled.div``;
export const Title = styled.h3`
  font: ${theme`typography.t_18_medium`};
  color: ${theme`colors.navy`};
`;
export const SubTitle = styled.p`
  margin-top: 3px;
  font: ${theme`typography.b_13`};
  color: ${theme`colors.gray_555555`};
`;

export const RightSide = styled.div``;
export const DateText = styled.p`
  font: ${theme`typography.b_13`};
  color: ${theme`colors.gray_3b3b3b`};
`;
export const NewQuestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  margin-top: 5px;
`;
export const NewQuestionText = styled.span`
  margin-right: 5px;
  font: ${theme`typography.b_13`};
  color: ${theme`colors.gray_555555`};
`;
export const Badge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  background-color: ${theme`colors.blue`};
  border-radius: 50px;
  font: ${theme`typography.b_13_bold`};
  color: ${theme`colors.white`};
`;
