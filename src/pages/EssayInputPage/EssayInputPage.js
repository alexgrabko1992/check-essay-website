import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EssayInputPage.css';
import Header from '../../components/Header/Header';

const EssayInputPage = () => {
  const params = useParams();
  if (!params || !params.id) {
      throw new Error("Параметр 'id' отсутствует в URL");
  }
  const id = params.id;

  console.log(id)

  const [essayText, setEssayText] = useState('');
  const [variantText, setVariantText] = useState('');
  const [variantTitle, setVariantTitle] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVariantData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/variants/${id}`);
        if (!response.ok) {
          throw new Error(`Ошибка при загрузке варианта ${id}`);
        }
        const data = await response.json();
        setVariantTitle(data.variant_title || '')
        setVariantText(data.variant_text || '');
      } catch (error) {
        console.error('Ошибка при загрузке информации о варианте:', error);
        setVariantTitle('Ошибка при загрузке заголовка варианта');
        setVariantText('Ошибка при загрузке текста варианта');
      } finally {
        setIsLoading(false);
      }
    };

    fetchVariantData();
  }, [id]);

  const handleInputChange = (e) => {
    setEssayText(e.target.value);
  };

  const handleSave = () => {
    console.log('Saved:', essayText);
  };

  const handleCheck = () => {
    console.log('Checked:', essayText);
  };

  return (
    <div>
      <Header/>
      <div className="variant-breadcrumbs-section">
    
        <a className="breadcrumbs-href" href="/variants">варианты</a>  
        {id == 0 ? 
        <a className="breadcrumbs-variant"> / индивидуальный</a>
        :
        <a className="breadcrumbs-variant"> / {id}</a>
        }
        
      </div>
      {id == 0 ? 
        <div className="form-container">
          <h1>Ключи для проверки</h1>
          <form action="/submit" method="POST">
            <div className="form-group">
              <label for="essay-title">Введите название сочинения</label>
              <input type="text" id="essay-title" name="essay-title" placeholder="Название сочинения" required/>
            </div>

            <div className="form-group">
              <label for="essay-text">Введите текст сочинения</label>
              <textarea id="essay-text" name="essay-text" placeholder="Текст сочинения" required></textarea>
            </div>

            <div className="form-group">
              <label for="author-position">Введите позицию автора</label>
              <textarea id="author-position" name="author-position" placeholder="Позиция автора" required></textarea>
            </div>
          </form>
        </div>

      :
      <div>
        <div className="variant-title-section">
        {isLoading ? 'Загрузка...' : variantTitle}
        </div>   
        <div className="variant-text-section">
          {isLoading ? 'Загрузка...' : variantText}
        </div>
      </div>    
      }

      <div className="essay-page">
        <div className="essay-hint-section">
          <div className='hint-form'>
            <div className="hint-form-number">1</div>
            <p>Введение. Мягко подведите читателя к сочинению в 2-3 предложениях.</p>
          </div>
          <div className='hint-form'>
            <div className="hint-form-number">2</div>
            <p>Сформулируйте проблему. Для этого нужно 2-4 предложения.</p>
          </div>
          <div className='hint-form'>
            <div className="hint-form-number">3,4</div>
            <p>Комментарий к проблеме. На каждой примере подробно на 4-7 предложений.</p>
          </div>
          <div className='hint-form'>
            <div className="hint-form-number">5</div>
            <p>Отношение автора к проблеме. Упомяните 1-2 предложения.</p>
          </div>
          <div className='hint-form'>
            <div className="hint-form-number">6</div>
            <p>Своё отношение к вышесказанному.</p>
          </div>
          <div className='hint-form'>
            <div className="hint-form-number">7</div>
            <p>Итог: вывод, обобщение рассуждений.</p>
          </div>
      </div>
      <div className="essay-input-section">
        <textarea
          placeholder="Начните вводить текст..."
          value={essayText}
          onChange={handleInputChange}
          className="essay-textarea"
        />
      </div>        
      </div>
        <div className="button-container">
          <button className="save-btn" onClick={handleSave}>сохранить</button>
          <button className="check-btn" onClick={handleCheck}>проверить</button>
        </div>
    </div>
  );
};

export default EssayInputPage;
