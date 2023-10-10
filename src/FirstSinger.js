import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Card, CardContent } from "@mui/material";

export const FirstSinger = ({ updateLyrics, isSingerSelected }) => {
  const [inputLyrics, setInputLyrics] = useState("");

  const handleInputChange = (e) => {
    const newLyrics = e.target.value;
    setInputLyrics(newLyrics);

    // Call the callback function to update lyrics in the Singers component
    updateLyrics(newLyrics, "First Singer", "violet");
  };

  // Render the card only if the singer is selected
  return (
    <>
      {isSingerSelected && (
        <Card style={{ margin: "8px", backgroundColor: "violet" }}>
          <CardContent>
            
            <Typography variant="body2">{inputLyrics}qwerty</Typography>
          </CardContent>
        </Card>
      )}
      <div>gfdgfdgf
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
