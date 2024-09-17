import Header from '../../components/Header/Header';
import EssayText from '../../components/EssayText/EssayText';
import './EssayPage.css'

function EssayPage() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Header />
        {/* <div className='back-link-container'>
            <a href="/essays" className="back-link">к сочинениям</a>
        </div> */}
      <main className="essay-content">
        <EssayText />
        <button className="like-button">нравится</button>
      </main>
    </div>
  );
}

export default EssayPage;