import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";




export default function App({ Component, pageProps }) {
  return (
    <main >
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
