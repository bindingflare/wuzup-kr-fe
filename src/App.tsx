import "./App.css";
import Footer from "./components/common/footer.tsx";
import Header from "./components/common/header.tsx";
import ListSection from "./components/listSection.tsx";
// @deno-types="@types/react"

function App() {
  return (
    <>
      <Header />
      <ListSection />
      <Footer />
    </>
  );
}

export default App;
