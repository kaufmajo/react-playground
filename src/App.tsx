import "./App.css";
import { PageWrapper } from "./components/PageWrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";

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
