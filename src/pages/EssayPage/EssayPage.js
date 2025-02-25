import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import { useParams, useLocation } from 'react-router-dom';
import './EssayPage.css';

function EssayPage() {
  const { id } = useParams();
  const [essay, setEssay] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const ifUserEssay = location.state?.ifUserEssay || false;

  useEffect(() => {
    const fetchEssay = async () => {
      if (ifUserEssay) {
        try {
          const response = await fetch(`http://localhost:8080/users/me/essays/${id}`, { credentials: 'include' });
          if (!response.ok) throw new Error('Ошибка загрузки сочинения');
          
          const data = await response.json();
          setEssay(data);
          setLikes(data.likes);
  
          const likeResponse = await fetch(`http://localhost:8080/likes/is_liked/${id}`, { credentials: 'include' });
          if (!likeResponse.ok) throw new Error('Ошибка проверки лайка');
          
          const likeData = await likeResponse.json();
          setIsLiked(likeData.is_liked);
        } catch (error) {
          console.error('Ошибка загрузки:', error);
        } finally {
          setLoading(false);
        }
      } else {
      try {
        const response = await fetch(`http://localhost:8080/essays/${id}`, { credentials: 'include' });
        if (!response.ok) throw new Error('Ошибка загрузки сочинения');
        
        const data = await response.json();
        setEssay(data);
        setLikes(data.likes);

        const likeResponse = await fetch(`http://localhost:8080/likes/is_liked/${id}`, { credentials: 'include' });
        if (!likeResponse.ok) throw new Error('Ошибка проверки лайка');
        
        const likeData = await likeResponse.json();
        setIsLiked(likeData.is_liked);
      } catch (error) {
        console.error('Ошибка загрузки:', error);
      } finally {
        setLoading(false);
      }
    }
  };

    fetchEssay();
  }, [id, ifUserEssay]);

  const handleLikeToggle = async () => {
    try {
      const url = `http://localhost:8080/likes/${id}`;
      const response = await fetch(url, {
        method: 'PUT',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(isLiked ? 'Ошибка при удалении лайка' : 'Ошибка при добавлении лайка');
      }

      const updatedLikes = isLiked ? likes - 1 : likes + 1;
      setLikes(updatedLikes);
      setIsLiked(!isLiked);
  
      setEssay((prevEssay) => ({
        ...prevEssay,
        likes: updatedLikes,
      }));

    } catch (error) {
      console.error(error.message);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
  };

  if (loading) return <div>Загрузка...</div>;
  if (!essay) return <div>Ошибка загрузки сочинения</div>;

  return (
    <div className="App">
      <Header />
      <main className="essay-content">

      <div className="variant-title-section">
        {essay.variant_title}
      </div>   
      <div className="essay-text-section">
          {essay.essay_text}
      </div>
      <div className="content-container">
        <div className="info-container">
          <div className="info-text">
            автор {essay.author_nickname}
          </div>
          <div className="like-text">{likes}</div>
          <button onClick={handleLikeToggle} className={`like-button ${isLiked ? 'liked' : ''}`}>
            {isLiked ? 'Убрать лайк' : 'Нравится'}
          </button>
        </div>
        <div>
          {essay.comments?.map((comment) => (
            <div className="comment-section" key={comment.id}>
              <span className="author-text">{comment.author_nickname}</span>
              <span className="date-text">{formatDate(comment.created_at)}</span>
              <div className="comment-text">{comment.comment_text}</div>
            </div>
          ))}
        </div>
        </div>
      </main>
    </div>
  );
}

export default EssayPage;
