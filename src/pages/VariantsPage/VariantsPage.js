import Header from '../../components/Header/Header';
import VariantGrid from '../../components/VariantGrid/VariantGrid';

function VariantsPage() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Header />
      <main>
        <VariantGrid />
      </main>
    </div>
  );
}

export default VariantsPage;