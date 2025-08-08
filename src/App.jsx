import "./App.css";
import { PageWrapper } from "./components/PageWrapper.jsx";
import { Container } from "./components/Container.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Main } from "./components/Main.jsx";

function App() {
  return (
    <>
      <PageWrapper>
        <Container>
          <Header />
          <Main />
          <Footer />
        </Container>
      </PageWrapper>
    </>
  );
}

export default App;
