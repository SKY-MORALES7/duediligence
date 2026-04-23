
import "./globals.css";
import Header from './components/Header'
import Footer from './components/Footer'


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      
    >
      <body className="min-h-full flex flex-col">
      
 

      <Header/>
           {children}
      <Footer/>


      </body>
    </html>
  );
}
