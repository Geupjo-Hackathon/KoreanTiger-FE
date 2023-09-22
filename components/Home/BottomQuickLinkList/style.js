import Link from 'next/link';
import { theme, styled } from 'twin.macro';

export const Container = styled.div`
  margin-top: auto;
  padding: 0 30px 30px;
`;

export const LinkItems = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

export const ItemLink = styled(Link)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  padding: 0 20px 0 30px;
  border: 1px solid ${theme`colors.gray_dddddd`};
  border-radius: 5px;

  &:hover {
    border-color: ${theme`colors.blue`};
  }
`;

export const Title = styled.h5`
  font: ${theme`typography.b_15_medium`};
  color: ${theme`colors.gray_3b3b3b`};
`;
