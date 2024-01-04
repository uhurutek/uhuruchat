import '../styles/custom.style.css';

import { Inter } from 'next/font/google';

// Define Inter font with subsets
const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.className} font-open-sans font-raleway`}>
      <Component {...pageProps} />
    </main>
  );
}

