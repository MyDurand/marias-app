import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header className="App" />
      <h1>Homepage</h1>
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;