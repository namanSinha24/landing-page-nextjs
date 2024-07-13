import Header from "./components/header";
import Layout2 from "./components/layout2";
import Layout3 from "./components/layout3.0";
import Layout4 from "./components/layout4";
import Marque from "./components/prefooter";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      {/* <div className="empty-header-div"></div> */}

      <Header />
      <Layout2 />
      <Layout3 />
      <Layout4 />
      <Marque />
      {/* <PlatformSteps />
      <Products />
      <Layout3 /> */}
      <Footer />
    </main>
  );
}
