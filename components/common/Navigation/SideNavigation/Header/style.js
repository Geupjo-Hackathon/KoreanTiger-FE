import { theme, styled } from 'twin.macro';

export const HeaderContainer = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid ${theme`colors.gray_3b3b3b`};
`;

export const ProfileContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 30px;
`;

export const PartText = styled.p`
  font: ${theme`typography.b_13`};
  color: ${theme`colors.gray_cccccc`};
`;
export const NameText = styled.p`
  font: ${theme`typography.st_16_medium`};
  color: ${theme`colors.white`};
`;
