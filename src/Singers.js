import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Card, CardContent, TextField, Button } from "@mui/material";

export default function Singers() {
  const { singerName } = useParams();
  const [collectedLyrics, setCollectedLyrics] = useState([]);
  const [selectedSinger, setSelectedSinger] = useState(null);
  const [inputLyrics, setInputLyrics] = useState("");

  const handleButtonClick = (singer) => {
    if (selectedSinger) {
      handleAddLyrics();
    }
    setSelectedSinger(singer);
    setInputLyrics(""); // Clear input when changing the selected singer
  };

  const handleInputChange = (event) => {
    setInputLyrics(event.target.value);
  };

  const handleAddLyrics = () => {
    if (inputLyrics.trim() !== "") {
      setCollectedLyrics((prevLyrics) => [
        ...prevLyrics,
        { singer: selectedSinger, lyrics: inputLyrics, color: getColor(selectedSinger) },
      ]);
      setInputLyrics(""); // Clear input after adding lyrics
    }
  };

  const getColor = (singer) => {
    // Define a color mapping for each singer
    const colorMap = {
      first: "violet",
      second: "lightgreen",
      third: "cyan",
      fourth: "pink",
    };

    return colorMap[singer] || "default";
  };

  useEffect(() => {
    // Clear the selected singer when the component unmounts
    return () => setSelectedSinger(null);
  }, []);

  return (
    <>
      <h1>Complete the Lyrics</h1>
      <div>
        <Link to="first">
          <button
            className="violet-button"
            onClick={() => handleButtonClick("first")}
          >
            {singerName === "first" ? "Selected" : "FIRST SINGER"}
          </button>
        </Link>
        <Link to="second">
          <button
            className="lightgreen-button"
            onClick={() => handleButtonClick("second")}
          >
            {singerName === "second" ? "Selected" : "SECOND SINGER"}
          </button>
        </Link>
        <Link to="third">
          <button
            className="cyan-button"
            onClick={() => handleButtonClick("third")}
          >
            {singerName === "third" ? "Selected" : "THIRD SINGER"}
          </button>
        </Link>
        <Link to="fourth">
          <button
            className="pink-button"
            onClick={() => handleButtonClick("fourth")}
          >
            {singerName === "fourth" ? "Selected" : "FOURTH SINGER"}
          </button>
        </Link>
      </div>

      {selectedSinger && (
        <>
          <TextField
            label={`Type lyrics for ${selectedSinger}`}
            variant="outlined"
            value={inputLyrics}
            onChange={handleInputChange}
            style={{ width: '30%', paddingTop: '10px', paddingBottom: '10px', height: 'auto' }}
          />
          {/* Remove the "Add Lyrics" button */}
        </>
      )}

      <Typography
        variant="h6"
        component="div"
        style={{
          padding: "16px",
          marginTop: "20px",
          border: "solid 1px",
          width: "50%",
          margin: "auto",
          height: "auto",
        }}
      >
        {collectedLyrics.map(({ singer, lyrics, color }, index) => (
          <Card key={index} style={{ margin: "8px", backgroundColor: color }}>
            <CardContent>
              <Typography variant="body1">{`${lyrics}`}</Typography>
            </CardContent>
          </Card>
        ))}
      </Typography>
    </>
  );
}
