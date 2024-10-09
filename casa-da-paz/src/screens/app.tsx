import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { CssBaseline } from '@mui/material';
import { ConfigProvider } from 'antd';
import createEmotionCache from '../createEmotionCache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme';

// Cria cache para a estilização do MUI
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: any;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <ConfigProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </ConfigProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
