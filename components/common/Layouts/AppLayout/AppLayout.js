import * as Styled from './style';

/**
 *
 * @param {ReactChild} children
 * @returns
 */
export default function AppLayout({ children }) {
  return (
    <Styled.LayoutContainer>
      <Styled.PageContainer>
        {/* TODO: header 영역 */}
        {children}
      </Styled.PageContainer>
    </Styled.LayoutContainer>
  );
}
