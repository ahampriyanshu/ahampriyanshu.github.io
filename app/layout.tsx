import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './styles/global.scss';
import styles from './layout.module.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import AppProvider from './AppContext';
// const inter = Inter({ subsets: ['latin'] });

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Priyanshu Tiwari',
  description:
    "Hi there, I'm Priyanshu Tiwari. A web developer and history buff, currently working at HackerRank as a Software Engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <AppProvider>
          <Header />
          <div className={styles.sidebar_wrapper}>
            <Sidebar />
            <div className={styles.content_container}>{children}</div>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
