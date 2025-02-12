import React, { useState, useEffect, useRef } from "react";
import { Heart } from "lucide-react";

function App() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showCelebration, setShowCelebration] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.5;
        audioRef.current.play().catch(error => {
          console.error("Autoplay failed:", error);
        });
      }
    };

    document.addEventListener("click", playMusic);

    return () => {
      document.removeEventListener("click", playMusic);
    };
  }, []);

  const handleNoButtonHover = () => {

    const restrictedWidth = 600;
    const restrictedHeight = 600;
    
  
    const buttonWidth = 100;
    const buttonHeight = 50;
    
   
    const newX = (Math.random() * (restrictedWidth - buttonWidth)) - ((restrictedWidth - buttonWidth) / 2);
    const newY = (Math.random() * (restrictedHeight - buttonHeight)) - ((restrictedHeight - buttonHeight) / 2);
  
    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleYesClick = () => {
  setShowCelebration(true);
  setTimeout(() => {
    const message = "Yes! 🎉 I am ready for the movie date pr date aur time mai bataugii! 🍿❤️";
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/919541074747?text=${encodedMessage}`;
}, 2000);

};


  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center relative overflow-hidden">
      <audio ref={audioRef} src="/assets/bgm.mp3" loop />

      {/* Animated Background Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute floating-heart text-pink-500 opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${Math.random() * 1.5 + 0.5})`,
            }}
          />
        ))}
      </div>

     
      <div 
        className="relative w-[1000px] h-[700px] flex flex-col items-center justify-center p-4 text-center rounded-lg backdrop-blur-lg animate-fadeIn"
        style={{
          background: "rgba(30, 30, 30, 0.8)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="mb-8 animate-slideDown">
          <img
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
            alt="Movie theater"
            className="rounded-lg mb-8 w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <h1 className="text-4xl font-bold mb-6 text-pink-400 animate-pulse">
          Heyy Cutiee! 💖
        </h1>
        <p className="text-2xl mb-8 leading-relaxed animate-slideUp">
          I was having an extra movie ticket, so will you be my movie date? 🎬✨
        </p>

        <div className="flex justify-center gap-6 mt-8 animate-bounce">
          <button
            onClick={handleYesClick}
            className="px-8 py-3 bg-pink-500 hover:bg-pink-600 rounded-full text-xl font-semibold transition-all transform hover:scale-110 hover:rotate-3"
          >
            Yes, I'd love to! 💝
          </button>

          <button
            onMouseEnter={handleNoButtonHover}
            style={{
              position: "absolute",
              left: `${noButtonPosition.x}px`,
              top: `${noButtonPosition.y}px`,
              transition: "all 0.3s ease",
            }}
            className="px-8 py-3 bg-gray-600 hover:bg-gray-700 rounded-full text-xl font-semibold rotate-3"
          >
            Nahiii😒😒
          </button>
        </div>
      </div>


      {showCelebration && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-20 animate-fadeIn">
          <div className="text-center p-8 rounded-lg backdrop-blur-lg bg-opacity-90 bg-gray-900 animate-popIn">
            <h2 className="text-4xl font-bold mb-4 text-pink-400 animate-bounce">
              Yayyyyyyyyyyy! 🎉
            </h2>
            <p className="text-2xl mb-6 animate-slideRight">
              I'll make it our best date to remember! ❤️
            </p>
            <p className="text-xl text-pink-300 animate-slideLeft">
              Get ready for an amazing movie date together! 🌟
            </p>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes floatHeart {
            0% {
              transform: translateY(0px) translateX(0px) scale(1);
              opacity: 0.5;
            }
            25% {
              transform: translateY(-50px) translateX(30px) scale(1.3);
              opacity: 0.7;
            }
            50% {
              transform: translateY(-100px) translateX(-30px) scale(0.8);
              opacity: 0.9;
            }
            75% {
              transform: translateY(-150px) translateX(50px) scale(1.2);
              opacity: 0.6;
            }
            100% {
              transform: translateY(-200px) translateX(-50px) scale(1);
              opacity: 0.5;
            }
          }

          @keyframes scaleHeart {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.5);
            }
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          @keyframes slideDown {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          @keyframes slideRight {
            from { transform: translateX(-50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }

          @keyframes slideLeft {
            from { transform: translateX(50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }

          @keyframes popIn {
            0% { transform: scale(0.5); opacity: 0; }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); opacity: 1; }
          }

          .floating-heart {
            animation: floatHeart infinite ease-in-out, scaleHeart infinite ease-in-out;
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }

          .animate-slideUp {
            animation: slideUp 1s ease-out forwards;
          }

          .animate-slideDown {
            animation: slideDown 1s ease-out forwards;
          }

          .animate-slideRight {
            animation: slideRight 1s ease-out forwards;
          }

          .animate-slideLeft {
            animation: slideLeft 1s ease-out forwards;
          }

          .animate-popIn {
            animation: popIn 0.6s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}

export default App;