import { Inter } from 'next/font/google'
import Header from './header';
import Footer from './footer';
import { Toaster } from "@/components/ui/toaster"
const inter = Inter({ subsets: ['latin'] })

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({children}: LayoutProps) {
    return(
        <div className='px-4 lg:px-2'>
            <Header/>
            <div className="max-w-4xl mx-auto">
                <main className={`${inter.className}`}>
                    {children}
                </main>
                <Toaster/>
                <Footer/>
            </div>
        </div>
    );
}