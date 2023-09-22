import { cache } from '@emotion/css';
import { CacheProvider, css } from '@emotion/react';

import GlobalStyles from '@styles/GlobalStyles';
import GlobalCss from '@styles/globals.css';
import Reset from '@styles/base/reset.css';
import Font from '@styles/base/font.css';

import Head from '@components/common/Head';
import AppLayout from '@components/common/Layouts/AppLayout';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={cache}>
      <GlobalStyles
        styles={css`
          ${GlobalCss}
          ${Reset}
          ${Font}
        `}
      />
      <Head />
      <AppLayout>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </AppLayout>
    </CacheProvider>
  );
}

export default MyApp;
