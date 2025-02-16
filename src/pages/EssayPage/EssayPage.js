import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import EssayText from '../../components/EssayText/EssayText';
import './EssayPage.css';
import { useParams } from 'react-router-dom';

function EssayPage() {
  const params = useParams();
  if (!params || !params.id) {
    throw new Error("Параметр 'id' отсутствует в URL");
  }
  const id = params.id;

  const [essay, setEssay] = useState(null);
  const [isLiking, setIsLiking] = useState(false); // Для блокировки повторных запросов
  const [likeError, setLikeError] = useState(null); // Для отображения ошибок

  useEffect(() => {
    const fetchEssay = async () => {
      try {
        const response = await fetch('http://localhost:8080/essays/' + id);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEssay(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchEssay();
  }, [id]);

  const handleLike = async () => {
    if (isLiking) return; // Блокируем повторные запросы

    setIsLiking(true);
    setLikeError(null);

    // Оптимистичное обновление
    const previousLikes = essay.likes;
    setEssay((prevEssay) => ({
      ...prevEssay,
      likes: prevEssay.likes + 1,
    }));

    try {
      const response = await fetch(`http://localhost:8080/likes/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Не удалось поставить лайк');
      }

      // Обновляем данные с сервера, если нужно
      const updatedEssay = await response.json();
      setEssay(updatedEssay);
    } catch (error) {
      console.error('Ошибка при отправке лайка:', error);
      setLikeError('Не удалось поставить лайк');
      // Возвращаем предыдущее значение лайков
      setEssay((prevEssay) => ({
        ...prevEssay,
        likes: previousLikes,
      }));
    } finally {
      setIsLiking(false); // Разблокируем кнопку
    }
  };

  if (!essay) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="App">
      <Header />
      {/* <div className="essay-breadcrumbs-section">
        <a className="breadcrumbs-href" href="/essays">сочинения</a>
        <a className="breadcrumbs-variant"> / {id}</a>
      </div> */}

      <main className="essay-content">
        <EssayText text={`${essay.essay_text}`} />
        <div className="info-container">
          <div className='info-text'>
            автор {essay.author_nickname}
            <br />вариант {essay.variant_id}
          </div>
          <div className="like-text">{essay.likes}</div>
          <button
            className="like-button"
            onClick={handleLike}
            disabled={isLiking} // Блокируем кнопку во время запроса
          >
            {isLiking ? 'Отправка...' : 'нравится'}
          </button>
          {likeError && <div className="error-message">{likeError}</div>}
        </div>
        <div>
          {essay.comments && essay.comments.map((comment) => (
            <div className='comment-section' key={comment.id}>
              <a className='auther-text'>{comment.author_nickname} </a>
              <a className='date-text'>{comment.created_at}</a>
              <div className='comment-text'>{comment.comment_text}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default EssayPage;