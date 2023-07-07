import { Inter } from 'next/font/google'
import Header from './header';

const inter = Inter({ subsets: ['latin'] })

export default function Layout({children}) {
    return(
        <div className='max-w-4xl mx-auto px-4 md:px-0'>
            <Header/>
            <main className={`${inter.className}`}>
                {children}
            </main>
        </div>
    );
}