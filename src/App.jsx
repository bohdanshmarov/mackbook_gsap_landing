import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import Performance from "./components/Performance.jsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";
import Showcase from "./components/Showcase.jsx";
import Features from "./components/Features.jsx";
import Highlights from "./components/Highlights.jsx";
import Footer from "./components/Footer.jsx";

gsap.registerPlugin(ScrollTrigger);

function App() {
    return (
       <main>
           <NavBar />
           <Hero />
           <ProductViewer />
           <Showcase />
           <Performance />
           <Features />
           <Highlights />
           <Footer />
       </main>
    )
}

export default App
