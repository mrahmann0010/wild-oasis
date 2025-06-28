import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/logo";
import "@/app/_styles/globals.css";
import {Josefin_Sans} from 'next/font/google';
import Header from "@/app/_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";
const josefin = Josefin_Sans({
  subsets:['latin'],
  display:'swap',
});

export const metadata = {
  title: {
    template: "%s The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:"Find our hotel, discover and enojy it!"
}

export default function RootLayout({children}){
  return(
    <html>
      <body className={`${josefin.className} antialiased bg-blue-950 min-h-screen text-white flex flex-col relative`}>
       <Header />
       
       <div className="flex-1 px-8 py-12">
       <main className="max-w-7xl mx-auto">
          <ReservationProvider>
            {children}
          </ReservationProvider>
          
        </main>
       </div>
        

        <footer className="flex justify-center py-6">
          <div>Copyrights 2024 @Romel</div>
        </footer>
      </body>
    </html>
  )
};