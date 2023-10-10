import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Card, CardContent } from "@mui/material";

export const FourthSinger = ({ updateLyrics, isSingerSelected }) => {
  const [inputLyrics, setInputLyrics] = useState("");

  const handleInputChange = (e) => {
    const newLyrics = e.target.value;
    setInputLyrics(newLyrics);

    // Call the callback function to update lyrics in the Singers component
    updateLyrics(newLyrics, "Fourth Singer", "pink");
  };

  // Render the card only if the singer is selected
  return (
    <>
      {isSingerSelected && (
        <Card style={{ margin: "8px", backgroundColor: "pink" }}>
          <CardContent>
            <Typography variant="body1">Fourth Singer</Typography>
            <Typography variant="body2">{inputLyrics}</Typography>
          </CardContent>
        </Card>
      )}
      <div>
        <input
          type="text"
          value={inputLyrics}
          onChange={handleInputChange}
          placeholder="Enter lyrics"
        />
      </div>
    </>
  );
};
