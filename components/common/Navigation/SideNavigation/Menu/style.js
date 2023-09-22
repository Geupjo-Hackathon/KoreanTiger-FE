import Link from 'next/link';

import { theme, styled } from 'twin.macro';

export const MenuContainer = styled.div`
  padding: 20px 0;
`;

export const MenuItemGroup = styled.div`
  &:not(:first-child) {
    margin-top: 20px;
  }
`;
export const MenuLabel = styled.p`
  margin-bottom: 10px;
  font: ${theme`typography.b_13`};
  color: ${theme`colors.gray_888888`};
`;
export const MenuItem = styled.div`
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

export const MenuLink = styled(Link)`
  position: relative;
  font: ${theme`typography.st_16_medium`};
  color: ${theme`colors.white`};
`;

export const SubMenuItem = styled.div`
  padding-left: 10px;
  margin-top: 10px;
`;
export const SubMenuLink = styled(Link)`
  position: relative;
  border-bottom: ${({ isactive }) =>
    isactive && `1px solid ${theme`colors.gray_888888`}`};
  font: ${theme`typography.b_15`};
  color: ${({ isactive }) =>
    isactive ? theme`colors.white` : theme`colors.gray_aaaaaa`};
`;

export const Dot = styled.i`
  position: absolute;
  top: -4px;
  right: -5px;
  display: block;
  width: 4px;
  height: 4px;
  background-color: ${theme`colors.white`};
  border-radius: 50%;
`;
