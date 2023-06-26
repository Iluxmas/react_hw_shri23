import { Roboto } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { StoreProvider } from '@/redux/StoreProvider';
import './globals.css';
import SectionContainer from '@/components/SectionContainer/SectionContainer';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  subsets: ['cyrillic', 'latin'],
});

export const metadata = {
  title: 'Biletopoisk',
  description: 'Best cinema tickets',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${roboto.className} body`}>
        <StoreProvider>
          <Header />
          <SectionContainer>{children}</SectionContainer>

          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
