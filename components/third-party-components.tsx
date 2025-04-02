'use client';

import { GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';
import { EXTERNAL_LINKS } from './constants';

const TallySo = () => {
  return <Script strategy="afterInteractive" src="https://tally.so/widgets/embed.js" />;
};

export const ThirdPartyComponents = () => {
  return (
    <>
      <TallySo />
      { EXTERNAL_LINKS.GOOGLE_TAG_MANAGER_ID && <GoogleTagManager gtmId={EXTERNAL_LINKS.GOOGLE_TAG_MANAGER_ID!} /> }
    </>
  );
};
