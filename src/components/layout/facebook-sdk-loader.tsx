"use client";

import { useEffect } from 'react';

const FACEBOOK_APP_ID = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || "YOUR_FACEBOOK_APP_ID_PLACEHOLDER";

export function FacebookSdkLoader() {
  useEffect(() => {
    // Create fb-root div if it doesn't exist
    if (!document.getElementById('fb-root')) {
      const fbRoot = document.createElement('div');
      fbRoot.id = 'fb-root';
      document.body.appendChild(fbRoot);
    }

    // Load the Facebook SDK script
    const script = document.createElement('script');
    script.src = `https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v19.0&appId=${FACEBOOK_APP_ID}&autoLogAppEvents=1`;
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.nonce = 'aBcDeFg'; // Use the same nonce if you have a CSP

    document.body.appendChild(script);

    // Cleanup function to remove the script if the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only once

  return null; // This component does not render anything itself
}
