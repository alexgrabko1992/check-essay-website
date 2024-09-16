import Header from '../../components/Header/Header';
import VariantGrid from '../../components/VariantGrid/VariantGrid';
import EssayGrid from '../../components/EssayGrid/EssayGrid';

function MainPage() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Header />
      <main>
        <VariantGrid />
        <EssayGrid />
      </main>
    </div>
  );
}

export default MainPage;