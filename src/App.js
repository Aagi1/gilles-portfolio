import React, { useState, useEffect } from 'react';
import monImage from './assets/images/profil.jpg';



const GillesInterface = () => {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: 'Africa/Casablanca'
    };

    return date.toLocaleTimeString('en-US', options);
  };

  return (
    <div className="h-screen bg-gray-100 p-5">
      <div className="h-full flex gap-5">
        {/* Première colonne - 50% */}
        <div className="w-1/2 flex flex-col gap-5">

          {/* Premier block - 80% hauteur */}
          <div className="h-4/5  rounded-3xl px-16 pt-12 text-white relative overflow-hidden" style={{backgroundColor: '#272343'}}>
            <div className="text-2xl font-normal mb-9 opacity-90">
              {formatTime(currentTime)}<br/>
              Casablanca Morocco
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight opacity-70">Gilles Akpinfa</h1>
            <p className="text-2xl leading-7 opacity-90 max-w-lg font-normal">
              Je suis élève ingénieur passioné de data et d'IA. Je vous aide à créer des applications numéiques avec une forte valeur ajoutée sur le marché.
            </p>
          </div>

          {/* Second block - 20% hauteur */}
          <div className="h-1/5 rounded-3xl flex items-center justify-center" style={{backgroundColor: '#E3F6F5', color: '#18534F'}}>
            <h2 className="text-xl font-medium">Contactez-moi</h2>
          </div>

        </div>

        {/* Deuxième colonne - 25% */}
        <div className="w-1/4 flex flex-col gap-5">

          {/* Block 1 - 20% hauteur */}
          <div className="h-1/4 rounded-3xl flex items-center justify-center px-4" style={{backgroundColor: '#FFD803', color:'#18534F'}}>
            <h3 className="text-lg font-semibold text-center">SmartSafeCity</h3>
          </div>

          {/* Block 2 - 20% hauteur */}
          <div className="h-1/4 rounded-3xl p-4 flex justify-center items-center" style={{backgroundColor: '#BAE8E8', color:'#18534F'}}>
            <div className="text-lg font-bold">SalesAnalysis</div>
          </div>

          {/* Block 3 - 20% hauteur */}
          <div className="h-1/4  rounded-3xl p-4 flex items-center justify-center" style={{backgroundColor: '#E3F6F5', color: '#18534F'}}>
            <div className="text-lg font-bold">StartLink</div>
          </div>

          {/* Block 4 - 20% hauteur */}
          <div className="h-1/4 rounded-3xl p-4 flex flex-col justify-center" style={{backgroundColor: '#2D334A'}}>
            <h3 className="text-sm font-medium text-white text-opacity-50 mb-2">Voir plus sur</h3>
            <div className="flex items-center justify-center">
              <div className="text-lg font-bold text-white">Github</div>
            </div>
          </div>

        </div>

        {/* Troisième colonne - 25% */}
        <div className="w-1/4 flex flex-col gap-5">

          {/* Block 1 - 40% hauteur */}
          <div className="h-1/2 rounded-3xl relative overflow-hidden bg-gray-200">
            <img
              src={monImage}
              alt="Description"
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </div>

          {/* Block 2 - 10% hauteur */}
          <div className="h-1/10 rounded-3xl flex items-center justify-center px-4 py-2" style={{backgroundColor: '#FFD803', color:'#18534F'}}>
            <span className="text-xs font-medium ">Gilles n'est pas en ligne</span>
          </div>

          {/* Block 3 - 35% hauteur */}
          <div className="flex-1 rounded-3xl p-4 text-white relative" style={{backgroundColor: '#272343'}}>
            <div className="absolute top-4 right-4 text-sm font-medium">Téléchargez mon CV</div>
          </div>
        </div>





      </div>
    </div>
  );
};

export default GillesInterface;