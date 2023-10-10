import './App.css';
import { Route, Routes } from 'react-router-dom';
import TheMain from './TheMain';

import { FirstSinger } from './FirstSinger';
import { SecondSinger } from './SecondSinger';
import { ThirdSinger } from './ThirdSinger';
import { FourthSinger } from './FourthSinger';
import Singers from './Singers';

function App() {
  // Define the updateLyrics function here
  // const updateLyrics = (newLyrics, singerName) => {
  //   // Handle the logic for updating lyrics
  //   console.log("Lyrics updated:", newLyrics);
  //   console.log("From Singer:", singerName);
  // };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TheMain />} />
        <Route path='singer' element={<Singers />}>
          <Route path="first" element={<FirstSinger />} />
          <Route path="second" element={<SecondSinger />} />
          <Route path="third" element={<ThirdSinger />} />
          <Route path="fourth" element={<FourthSinger />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
