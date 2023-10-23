import GameCard from './GameCard/GameCard';
import './App.css';


function App() {

  return (
    <div className="App">
      <div>
        <button>Раздать карты</button>
      </div>
      <div className="playingCards faceImages">
        <GameCard rank="A" suit="hearts" />
        <GameCard rank="K" suit="spades" />
        <GameCard rank="2" suit="diams" />
        <GameCard rank="10" suit="clubs" />
        <GameCard rank="7" suit="diams" />
      </div>
    </div>
  );
}

export default App;
