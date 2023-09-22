// styles/GlobalStyles.js
import { Global, css } from '@emotion/react';

import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const customStyles = css({
  body: {
    fontFamily: theme`fontFamily.noto`,
    color: theme`colors.gray_222222`,
    WebkitTapHighlightColor: theme`colors.blue`,
    minWidth: theme`variables.min-width`,
    ...tw`antialiased`,
  },
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
