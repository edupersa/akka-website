"use client";

import Script from "next/script";
import { useCookieConsent } from "@/lib/cookie-consent";

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

/**
 * Loads Meta Pixel only once the user has given consent for that category
 * AND the corresponding tracking ID is configured via env vars.
 * Google Tag Manager is installed separately in the root layout and does
 * not require a client-side consent gate.
 */
export default function Analytics() {
  const { choices } = useCookieConsent();

  return (
    <>
      {choices.marketing && META_PIXEL_ID && (
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
