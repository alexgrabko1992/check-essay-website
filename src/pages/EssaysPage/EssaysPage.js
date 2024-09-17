import Header from '../../components/Header/Header';
import EssayGrid from '../../components/EssayGrid/EssayGrid';
import './EssaysPage.css';

function EssaysPage() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Header />
      <main>
        <section className="essay">
          <h2>Примеры сочинений</h2>
          <EssayGrid />
          </ section>
      </main>
    </div>
  );
}

export default EssaysPage;