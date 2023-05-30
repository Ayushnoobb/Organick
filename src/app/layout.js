import './globals.css'
import { Roboto } from 'next/font/google';

import Navbar from '@/components/navbar';;
import Footer from '@/components/footer';

// import { Provider } from 'react-redux';
// import store from '@/lib/store/store';
// import { ProductProvider } from '../ProductContext';
import { ProductProvider } from '@/lib/productContext';

const roboto = Roboto({ subsets: ['latin']  , weight:['300']})


export const metadata = {
  title: 'Organick',
  description: 'Best online vegetable shop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ProductProvider>
          <Navbar />
            {children}
          <Footer />
        </ProductProvider>
      </body>
    </html>
  )
}
