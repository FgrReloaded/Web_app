import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Middle from './components/Middle';

function App() {
  return (
    <>
      <div className='background'>
        <Header />
        <Content/>
        <Middle />
        <Footer />
      </div>
    </>
  );
}

export default App;
