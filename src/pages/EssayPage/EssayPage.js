import Header from '../../components/Header/Header';
import EssayText from '../../components/EssayText/EssayText';
import './EssayPage.css'
import { useParams } from 'react-router-dom';

function EssayPage() {
  const params = useParams();

  if (!params || !params.id) {
      throw new Error("Параметр 'id' отсутствует в URL");
  }

  const id = params.id;

  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Header />
        {/* <div className='back-link-container'>
            <a href="/essays" className="back-link">к сочинениям</a>
        </div> */}
      <main className="essay-content">
        <EssayText text={`essay ${id}`}/>
        <button className="like-button">нравится</button>
      </main>
    </div>
  );
}

export default EssayPage;