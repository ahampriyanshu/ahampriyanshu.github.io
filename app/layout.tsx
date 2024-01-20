import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './styles/global.scss';
import styles from './layout.module.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import AppProvider from './AppContext';

const productSans = localFont({
  src: '../public/fonts/ProductSans.woff2',
  variable: '--font-calsans',
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
  console.log(`
  ███████╗███╗   ███╗ █████╗ ██╗██╗     
  ╚══███╔╝████╗ ████║██╔══██╗██║██║     
    ███╔╝ ██╔████╔██║███████║██║██║     
   ███╔╝  ██║╚██╔╝██║██╔══██║██║██║     
  ███████╗██║ ╚═╝ ██║██║  ██║██║███████╗
  ╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚══════╝
  `);

  return (
    <html lang='en'>
      <body className={productSans.className}>
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
