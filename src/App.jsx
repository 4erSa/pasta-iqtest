import React, { useState, useEffect } from 'react';
import './App.css';

const QUESTIONS = [
  {
    question: "Что тяжелее: 1 кг ваты или 1 кг железа?",
    answers: [
      { text: "Вата, потому что её больше", points: 10 },
      { text: "Железо, потому что оно злое", points: 5 },
      { text: "Ни то ни другое", points: 2 },
      { text: "Тяжелее твой отец, когда ты в 3 часа ночи мяувиш", points: 50 },
      { text: "Я паук, я не отвечаю", points: 100 }
    ]
  },
  {
    question: "Сколько будет 2 + 2?",
    answers: [
      { text: "4", points: 1 },
      { text: "Рыба", points: 50 },
      { text: "Windows XP", points: 100 },
      { text: "Зависит от курса доллара", points: 80 },
      { text: "Я гуманитарий, отстаньте", points: 40 }
    ]
  },
  {
    question: "Если ты видишь кнопку «НЕ НАЖИМАТЬ», что ты сделаешь?",
    answers: [
      { text: "Нажму", points: 20 },
      { text: "Нажму два раза", points: 50 },
      { text: "Позову друга, чтобы нажал он", points: 30 },
      { text: "Выключу монитор", points: 100 },
      { text: "Съем инструкцию", points: 150 }
    ]
  },
  {
    question: "Какой звук издаёт падающее тело?",
    answers: [
      { text: "Бум", points: 5 },
      { text: "Мяу", points: 50 },
      { text: "Error 404", points: 100 },
      { text: "Звук падающего тела + «ты сын шлюхи»", points: 200 },
      { text: "Зависит от настроек BIOS", points: 80 }
    ]
  },
  {
    question: "Что находится внутри компьютера?",
    answers: [
      { text: "Маленькие гномы", points: 80 },
      { text: "Интернет", points: 40 },
      { text: "Пыль и сожаления", points: 100 },
      { text: "Секретная папка «Новая папка 27»", points: 150 },
      { text: "Мозг, но не твой", points: 200 }
    ]
  },
  {
    question: "Почему небо синее?",
    answers: [
      { text: "Потому что оно грустит", points: 60 },
      { text: "Потому что его забыли перекрасить", points: 80 },
      { text: "Из-за рассеяния света", points: -50 },
      { text: "Потому что так сказал монитор", points: 100 },
      { text: "Небо? Я в подвале", points: 150 }
    ]
  },
  {
    question: "Что делать, если сайт мигает?",
    answers: [
      { text: "Мигать в ответ", points: 100 },
      { text: "Позвонить провайдеру", points: 20 },
      { text: "Уважать дизайн", points: 200 },
      { text: "Закрыть глаза", points: 50 },
      { text: "Повысить яркость до боли", points: 150 }
    ]
  },
  {
    question: "Какой самый умный овощ?",
    answers: [
      { text: "Картошка", points: 50 },
      { text: "Огурец", points: 40 },
      { text: "Баклажан в очках", points: 150 },
      { text: "Лук, потому что заставляет плакать", points: 80 },
      { text: "Wi-Fi роутер", points: 200 }
    ]
  },
  {
    question: "Если поезд едет на север, а ты ешь сухарь, кто виноват?",
    answers: [
      { text: "Машинист", points: 30 },
      { text: "Сухарь", points: 50 },
      { text: "Север", points: 40 },
      { text: "Тот, кто придумал вопрос", points: 150 },
      { text: "Internet Explorer", points: 200 }
    ]
  },
  {
    question: "Что означает IQ?",
    answers: [
      { text: "Internet Quality", points: 100 },
      { text: "Икра Кабачковая", points: 150 },
      { text: "Очень важная цифра", points: 20 },
      { text: "Индекс кринжа", points: 200 },
      { text: "Никто не знает, но все боятся", points: 80 }
    ]
  },
  {
    question: "Сколько пальцев на 13 руках?",
    answers: [
      { text: "65", points: 10 },
      { text: "Зависит от радиации", points: 150 },
      { text: "Много", points: 50 },
      { text: "13, если это руки кукол", points: 80 },
      { text: "Я не умею считать до 13", points: 120 }
    ]
  },
  {
    question: "Какой браузер самый быстрый в 2003 году?",
    answers: [
      { text: "Netscape Navigator", points: 50 },
      { text: "Opera 7", points: 80 },
      { text: "Internet Explorer 6 (Бог)", points: 200 },
      { text: "Бумажная почта", points: 100 },
      { text: "Тот, который не виснет при загрузке картинок с голыми женщинами", points: 150 }
    ]
  },
  {
    question: "Если выпить 100 Гб дискового пространства, что будет?",
    answers: [
      { text: "Станешь сервером", points: 150 },
      { text: "Заболеешь вирусом", points: 100 },
      { text: "Ошибка сегментации в желудке", points: 120 },
      { text: "Просто икнёшь в формате .wav", points: 200 },
      { text: "Ничего, я пью только оперативку", points: 180 }
    ]
  },
  {
    question: "Какого цвета Красный Квадрат Малевича?",
    answers: [
      { text: "Красного", points: -20 },
      { text: "Серо-буро-малинового в крапинку", points: 100 },
      { text: "Цвета детской неожиданности", points: 80 },
      { text: "Это ловушка, там круг", points: 150 },
      { text: "Прозрачный, если смотреть через Winamp", points: 200 }
    ]
  },
  {
    question: "Как выйти из Vim?",
    answers: [
      { text: ":q!", points: 0 },
      { text: "Купить новый компьютер", points: 150 },
      { text: "Выключить свет во всем районе", points: 180 },
      { text: "Попросить прощения у клавиатуры", points: 120 },
      { text: "Никак, это твоя новая жизнь", points: 200 }
    ]
  },
  {
    question: "Любит ли мышка клавиатуру?",
    answers: [
      { text: "Да, они пара", points: 50 },
      { text: "Нет, мышка абьюзер", points: 100 },
      { text: "Только если у них общий коврик", points: 80 },
      { text: "Клавиатура слишком механическая для чувств", points: 150 },
      { text: "Они оба ненавидят пользователя", points: 200 }
    ]
  },
  {
    question: "Если 0 — это ничего, то что такое 00?",
    answers: [
      { text: "Туалет", points: 100 },
      { text: "Бесконечность, вставшая на колени", points: 150 },
      { text: "Два ничего", points: 20 },
      { text: "Глаза того, кто это читает", points: 120 },
      { text: "Бинарные очки", points: 80 }
    ]
  },
  {
    question: "Где находится клавиша «Any»?",
    answers: [
      { text: "Рядом с Ctrl", points: 30 },
      { text: "В астрале", points: 150 },
      { text: "Это кнопка Power", points: 100 },
      { text: "Там же, где и здравый смысл", points: 180 },
      { text: "Я нажал на монитор, это считается?", points: 120 }
    ]
  },
  {
    question: "Слышишь ли ты желтый цвет?",
    answers: [
      { text: "Да, он пахнет как 56к модем", points: 200 },
      { text: "Только по четвергам", points: 100 },
      { text: "Нет, я дальтоник на уши", points: 150 },
      { text: "Желтый слишком громкий", points: 120 },
      { text: "Что?", points: 10 }
    ]
  },
  {
    question: "Кто админ этого сайта?",
    answers: [
      { text: "Твой компьютерный мастер", points: 80 },
      { text: "Бог HTML", points: 150 },
      { text: "Школьник из 5-Б класса", points: 200 },
      { text: "Случайный скрипт", points: 100 },
      { text: "Ты, если нажмешь Alt+F4", points: 180 }
    ]
  }
];

const VisitorCounter = () => {
  const [count, setCount] = useState(1337);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 5));
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="visitor-counter">
      ВЫ ПОСЕТИТЕЛЬ №<span className="count-digits">{count.toString().padStart(8, '0')}</span>
    </div>
  );
};

const FakePopup = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("ВНИМАНИЕ! Ваш интеллект устарел. Обновить?");
  const [pos, setPos] = useState({ top: '50%', left: '50%' });
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleXClick = () => {
    if (moves < 5) {
      const newTop = Math.floor(Math.random() * 70 + 15) + '%';
      const newLeft = Math.floor(Math.random() * 70 + 15) + '%';
      setPos({ top: newTop, left: newLeft });
      setMoves(prev => prev + 1);
      setText(`ХВАТИТ ТЫКАТЬ! Осталось прыжков: ${5 - moves}`);
    } else {
      setShow(false);
    }
  };

  const handleYes = () => {
    setText("ЗАГРУЗКА ВИРУСА... [||||||||||  ] 45%");
    setTimeout(() => {
      setText("ОШИБКА: Вирус слишком велик для вашего мозга.");
    }, 2000);
  };

  const handleNo = () => {
    setText("ОТКАЗ ПРИНЯТ. НО МЫ ВСЕ РАВНО ОБНОВИМ.");
    setTimeout(() => setShow(false), 2000);
  };

  if (!show) return null;

  return (
    <div className="fake-popup" style={{ top: pos.top, left: pos.left }}>
      <div className="popup-title">
        <span>!!! SYSTEM CRITICAL ERROR !!!</span>
        <button className="close-x" onClick={handleXClick}>X</button>
      </div>
      <div className="popup-content">
        <p>{text}</p>
        <div className="popup-buttons">
          <button className="win-btn" onClick={handleYes}>Да</button>
          <button className="win-btn" onClick={handleNo}>Нет</button>
        </div>
        <div className="marquee-mini">
          <marquee scrollamount="5">overheating... brain_error... logic_not_found...</marquee>
        </div>
      </div>
    </div>
  );
};

const VintageVideoPlayer = ({ url }) => {
  if (!url) return null;
  return (
    <div className="vmp-container">
      <div className="vmp-title">
        <span>Windows Media Player</span>
        <div className="vmp-controls-top">
          <button className="vmp-min">_</button>
          <button className="vmp-max">[]</button>
          <button className="vmp-close" onClick={() => alert("ОШИБКА: Видео слишком важное, чтобы его закрывать!")}>X</button>
        </div>
      </div>
      <div className="vmp-video-area">
        <video src={url} autoPlay controls style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className="vmp-status-bar">
        <span>Playing...</span>
      </div>
    </div>
  );
};

const SystemNotification = ({ title, message, onClose }) => {
  return (
    <div className="system-notification">
      <div className="popup-title">
        <span>{title || "Message from SYSTEM"}</span>
        <button className="close-x" onClick={onClose}>X</button>
      </div>
      <div className="popup-content">
        <p className="notif-text">{message}</p>
        <div className="popup-buttons">
          <button className="win-btn" onClick={onClose}>OK</button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [step, setStep] = useState('start');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [loadingText, setLoadingText] = useState("");
  const [iqResult, setIqResult] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    let ws;
    try {
      // Use ws:// for the hardcoded IP. 
      // Note: Browsers may block this on HTTPS sites (Mixed Content).
      ws = new WebSocket('ws://2.26.76.84:9005');
      
      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.type === 'video') {
            setActiveVideo(data.url);
            if (data.duration) {
              setTimeout(() => {
                setActiveVideo(null);
              }, data.duration);
            }
          } else {
            setNotifications(prev => [...prev, { id: Date.now(), title: data.title, message: data.message }]);
          }
        } catch (e) {
          console.error("Failed to parse WS message", e);
        }
      };

      ws.onerror = (e) => {
        console.warn("WebSocket error (likely blocked by HTTPS/Mixed Content):", e);
      };
    } catch (err) {
      console.warn("WebSocket connection failed:", err);
    }

    return () => {
      if (ws) ws.close();
    };
  }, []);

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const loadingPhrases = [
    "Сканируем лоб...",
    "Подключаемся к спутнику...",
    "Сравниваем с картошкой...",
    "Загружаем интеллект через dial-up...",
    "Проверяем, моргнул ли мозг...",
    "Анализируем историю браузера (о боже...)...",
    "Дефрагментация извилин...",
    "Поиск следов разума...",
    "Связь с астралом установлена..."
  ];

  const startTest = () => {
    setStep('test');
    setCurrentQuestion(0);
    setScore(0);
  };

  const handleAnswer = (points) => {
    setScore(prev => prev + points);
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      showLoading();
    }
  };

  const showLoading = () => {
    setStep('loading');
    let i = 0;
    const interval = setInterval(() => {
      setLoadingText(loadingPhrases[i % loadingPhrases.length]);
      i++;
    }, 600);

    setTimeout(() => {
      clearInterval(interval);
      calculateResult();
    }, 4000);
  };

  const calculateResult = () => {
    // Arbitrary calculation
    const baseIq = 50;
    const randomFactor = Math.floor(Math.random() * 40) - 20;
    const finalIq = Math.floor((score / 10) + baseIq + randomFactor);
    setIqResult(finalIq);
    setStep('result');
  };

  const getComment = (iq) => {
    if (iq < 40) return "Ты не проиграл. Ты просто загрузился в демо-режиме.";
    if (iq < 90) return "Нормально. Почти как калькулятор без батареек.";
    if (iq < 140) return "Опасно. Ты начал понимать интерфейс этого сайта.";
    return "Ошибка: мозг пользователя несовместим с HTML 4.01.";
  };

  return (
    <div className="main-container">
      <header className="site-header">
        <h1 className="blink-text rainbow-text">IQ TEST 2003: ПРОВЕРЬ СВОЙ МОЗГ</h1>
        <div className="marquee">
          <p>*** САМЫЙ ТОЧНЫЙ ТЕСТ В МИРЕ! ОДОБРЕНО НЕИЗВЕСТНЫМИ УЧЕНЫМИ! *** СКАЧАЙ БЕСПЛАТНО RAM! *** ТВОЙ IQ УЖЕ РАССЧИТАН! ***</p>
        </div>
      </header>

      <div className="content-wrapper">
        <aside className="sidebar left">
          <div className="banner-box spin">
            <p>100% НАУЧНО</p>
          </div>
          <div className="banner-box shake">
            <p>СКАЧАЙ RAM</p>
          </div>
          <div className="news-block">
            <h3>НОВОСТИ</h3>
            <ul>
              <li>13.04.2003: Мы добавили мозг.</li>
              <li>14.04.2003: Мозг удалён из-за багов.</li>
              <li>15.04.2003: Тест стал точнее на 0.0001%.</li>
            </ul>
          </div>
        </aside>

        <main className="main-content">
          {step === 'start' && (
            <div className="start-screen">
              <h2 className="pulse">ТЕСТ НАСТОЛЬКО ТОЧНЫЙ, ЧТО МЫ САМИ ИСПУГАЛИСЬ</h2>
              <p className="ascii-art">
                {`
      _      
     ( )     
    (   )    
     | |     
     |_|     
    /   \\
   |  IQ  |
    \\___/
                `}
              </p>
              <div className="certified-badge">
                <p>CERTIFIED BY:</p>
                <div className="badge-grid">
                  <span>[W3C HTML 4.01]</span>
                  <span>[ICQ OK]</span>
                  <span>[MADE IN NOTEPAD]</span>
                </div>
              </div>
              <button className="win-btn start-btn" onClick={startTest}>
                НАЧАТЬ ИНТЕЛЛЕКТУАЛЬНОЕ СТРАДАНИЕ
              </button>
              <VisitorCounter />
              <div className="warning-box">
                <p>ВНИМАНИЕ: Во время теста не рекомендуется думать, это может привести к перегреву модема.</p>
              </div>
            </div>
          )}

          {step === 'test' && (
            <div className="question-screen">
              <div className="progress-bar-container">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${((currentQuestion + 1) / QUESTIONS.length) * 100}%` }}
                ></div>
              </div>
              <p className="question-counter">Вопрос {currentQuestion + 1} из {QUESTIONS.length}</p>
              <h2 className="question-text">{QUESTIONS[currentQuestion].question}</h2>
              <div className="answers-list">
                {QUESTIONS[currentQuestion].answers.map((ans, idx) => (
                  <button
                    key={idx}
                    className="win-btn answer-btn"
                    onClick={() => handleAnswer(ans.points)}
                  >
                    {ans.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'loading' && (
            <div className="loading-screen">
              <div className="loader-icon spin"></div>
              <p className="loading-text">{loadingText}</p>
              <div className="fake-status">
                <p>Status: ANALYZING_EXISTENCE...</p>
                <p>Speed: 56 kbps</p>
              </div>
            </div>
          )}

          {step === 'result' && (
            <div className="result-screen">
              <h2 className="blink-text">ВАШ РЕЗУЛЬТАТ ГОТОВ!</h2>
              <div className="iq-display">
                <p>ВАШ IQ:</p>
                <h1 className="iq-number rainbow-text">{iqResult}</h1>
              </div>
              <div className="comment-box">
                <p>{getComment(iqResult)}</p>
              </div>
              <button className="win-btn restart-btn" onClick={() => setStep('start')}>
                ПРОЙТИ ЕЩЁ РАЗ И СТАТЬ УМНЕЕ НА 0%
              </button>
              <div className="share-section">
                <p>Похвастаться в ICQ:</p>
                <button className="win-btn small-btn">Отправить 123456789</button>
              </div>
            </div>
          )}
        </main>

        <aside className="sidebar right">
          <RatingTable />
          <div className="banner-box pulse">
            <p>ПОЗВОНИ МОДЕМУ</p>
            <p>0-800-BRAIN-DEAD</p>
          </div>
          <div className="ascii-ad">
            <pre>
              {`
  /\\_/\\  
 ( o.o ) 
  > ^ <  
              `}
            </pre>
            <p>KOTIK.JPG</p>
          </div>
          <div className="friend-links">
            <p>ДРУЗЬЯ САЙТА:</p>
            <marquee direction="up" scrollamount="1" height="50">
              <p>Vasya_Cool_Site</p>
              <p>Mortal_Kombat_Fan</p>
              <p>Counter-Strike-1.3</p>
            </marquee>
          </div>
        </aside>
      </div>

      <footer className="site-footer">
        <marquee behavior="alternate">
          ЛУЧШЕ ВСЕГО РАБОТАЕТ В INTERNET EXPLORER 6.0 | (C) 2003 SUPER-MEGA-WEB-DESIGN-STUDIO
        </marquee>
      </footer>

      <FakePopup />
      
      <div className="notifications-container">
        {notifications.map(n => (
          <SystemNotification 
            key={n.id} 
            title={n.title}
            message={n.message} 
            onClose={() => removeNotification(n.id)} 
          />
        ))}
      </div>

      {activeVideo && (
        <div className="video-overlay">
          <VintageVideoPlayer url={activeVideo} />
        </div>
      )}
    </div>
  );
};

const RatingTable = () => (
  <div className="rating-table">
    <h3>ТАБЛИЦА ЛИДЕРОВ</h3>
    <table>
      <thead>
        <tr>
          <th>Место</th>
          <th>Имя</th>
          <th>IQ</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>local</td>
          <td>999</td>
        </tr>
        <tr>
          <td>2</td>
          <td>мама админа</td>
          <td>0</td>
        </tr>
        <tr>
          <td>3</td>
          <td>PSYHOZ</td>
          <td>999</td>
        </tr>
        <tr className="current-user-row">
          <td>999</td>
          <td>ТЫ</td>
          <td>???</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default App;
