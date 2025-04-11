import { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';

const styles: Record<string, CSSProperties> = {
  container: {
    fontFamily: '"Roboto", sans-serif',
    backgroundColor: '#f5f5f5',
    height: '100vh',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
    maxWidth: '400px',
  },
  title: {
    fontSize: '72px',
    fontWeight: 'bold',
    color: '#3f51b5',
    margin: '0 0 10px 0',
  },
  subtitle: {
    fontSize: '24px',
    fontWeight: '500',
    margin: '0 0 10px 0',
  },
  description: {
    fontSize: '16px',
    color: '#757575',
    marginBottom: '30px',
  },
  button: {
    backgroundColor: '#3f51b5',
    color: '#ffffff',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>404</h1>
        <p style={styles.subtitle}>Страница не найдена</p>
        <p style={styles.description}>
          Возможно, вы ввели неправильный адрес или страница была удалена.
        </p>
        <button style={styles.button} onClick={handleGoHome}>
          Вернуться на главную
        </button>
      </div>
    </div>
  );
};

