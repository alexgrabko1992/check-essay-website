import Header from '/Users/stella/diploma/front/check-essay-website/src/components/Header/Header';
import VariantGrid from '/Users/stella/diploma/front/check-essay-website/src/components/VariantGrid/VariantGrid';
import EssayGrid from '/Users/stella/diploma/front/check-essay-website/src/components/EssayGrid/EssayGrid';

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