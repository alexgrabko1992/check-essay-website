import Header from '../../components/Header/Header';
import EssayGrid from '../../components/EssayGrid/EssayGrid';

function EssaysPage() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Header />
      <main>
        <EssayGrid />
      </main>
    </div>
  );
}

export default EssaysPage;