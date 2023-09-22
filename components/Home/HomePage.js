import Header from './Header';
import QuickLinkSlide from './QuickLinkSlide';
import BottomQuickLinkList from './BottomQuickLinkList';

import * as Styled from './style';

export default function HomePage() {
  return (
    <Styled.Container>
      <Header />
      <QuickLinkSlide />
      <BottomQuickLinkList />
    </Styled.Container>
  );
}
