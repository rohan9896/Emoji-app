import React, { useState } from "react";
import "./styles.css";

// var userName = prompt("Enter your name: ");
var userName = "There!";

var sportsEmojiDb = {
  "⚽": [
    "Football",
    "Football is a team sport played with a spherical ball between two teams of 11 players. It is played by approximately 250 million players in over 200 countries and dependencies, making it the world's most popular sport."
  ],
  "🏏": [
    "Cricket",
    "Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard pitch with a wicket at each end, each comprising two bails balanced on three stumps."
  ],
  "🏸": [
    "Badminton",
    "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams, the most common forms of the game are singles and doubles."
  ],
  "🏓": [
    "Table tennis",
    "Table tennis, also known as ping-pong and whiff-whaff, is a sport in which two or four players hit a lightweight ball, also known as the ping-pong ball, back and forth across a table using small rackets. The game takes place on a hard table divided by a net."
  ],
  "🥊": [
    "Boxing",
    "Boxing is a combat sport in which two people, usually wearing protective gloves, throw punches at each other for a predetermined amount of time in a boxing ring. Amateur boxing is both an Olympic and Commonwealth Games sport and is a standard fixture in most international games—it also has its own World Championships."
  ],
  "🏀": [
    "Basketball",
    "Basketball, game played between two teams of five players each on a rectangular court, usually indoors. Each team tries to score by tossing the ball through the opponent’s goal, an elevated horizontal hoop and net called a basket."
  ],
  "🏐": [
    "Volleyball",
    "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules. It has been a part of the official program of the Summer Olympic Games since Tokyo 1964."
  ],
  "🚴‍♂️": [
    "Cycling",
    "Cycle sport is competitive physical activity using bicycles. There are several categories of bicycle racing including road bicycle racing, time trialling, cyclo-cross, mountain bike racing, track cycling, BMX, and cycle speedway."
  ],
  "🏊‍♂️": [
    "Swimming",
    "Swimming is an individual or team racing sport that requires the use of one's entire body to move through water. The sport takes place in pools or open water."
  ],
  "🏌️": [
    "Golf",
    "Golf is a club-and-ball sport in which players use various clubs to hit balls into a series of holes on a course in as few strokes as possible."
  ],
  "🤼‍♂️": [
    "Wrestling",
    "Wrestling is a combat sport involving grappling-type techniques such as clinch fighting, throws and takedowns, joint locks, pins and other grappling holds. The sport can either be genuinely competitive or sportive entertainment."
  ],
  "🏄": [
    "Surfing",
    "Surfing is a surface water pastime in which the wave rider, referred to as a surfer, rides on the forward part, or face, of a moving wave, which usually carries the surfer towards the shore."
  ],
  "🏋️": [
    "Weight Lifting",
    "Olympic weightlifting, or Olympic-style weightlifting, often simply referred to as weightlifting, is a sport in which the athlete attempts a maximum-weight single lift of a barbell loaded with weight plates. The two competition lifts in order are the snatch and the clean and jerk."
  ],
  "🎾": [
    "Tennis",
    "Tennis is a racket sport that can be played individually against a single opponent or between two teams of two players each. Each player uses a tennis racket that is strung with cord to strike a hollow rubber ball covered with felt over or around a net and into the opponent's court."
  ],
  "♟️": [
    "Chess",
    "Chess is a two-player strategy board game played on a chessboard, a checkered board with 64 squares arranged in an 8×8 grid. Played by millions of people worldwide, chess is believed to be derived from the Indian game chaturanga sometime before the 7th century."
  ]
};

var emojiArray = Object.keys(sportsEmojiDb);

export default function App() {
  var [[meaning, about], setMeaning] = useState("");

  var inputHandler = (event) => {
    var input = event.target.value;

    // var meaning = sportsEmojiDb[input][0];
    // var about = sportsEmojiDb[input][1];

    var sport = sportsEmojiDb[input];

    if (sport === undefined) {
      meaning = "Emoji doesn't exists in our DB!";
      about = "Please enter another emoji";
    } else {
      meaning = sportsEmojiDb[input][0];
      about = sportsEmojiDb[input][1];
    }
    setMeaning([meaning, about]);
  };

  var clickHandler = (emoji) => {
    meaning = sportsEmojiDb[emoji];
    setMeaning(meaning);
  };
  return (
    <div className="App">
      <h1 style={{ color: "white" }}>Hello {userName}👋</h1>
      <input
        style={{
          width: "15rem",
          height: "2rem",
          borderBlockColor: "black",
          fontSize: "larger",
          borderRadius: "1rem"
        }}
        placeholder="Enter emoji here"
        onChange={inputHandler}
      />
      <h1
        style={{
          backgroundColor: "white",
          marginTop: "2rem",
          paddingTop: "3rem",
          paddingBottom: "3rem",
          fontFamily: "cursive"
        }}
      >
        {meaning}
      </h1>

      <div class="aboutDiv">
        <h2>About game: </h2>
        {about}
      </div>

      <h3 style={{ fontSize: "x-large", color: "white" }}>Choose from here:</h3>
      {emojiArray.map((item, index) => {
        return (
          <p onClick={() => clickHandler(item)} class="spanStyle">
            {item}
          </p>
        );
      })}
    </div>
  );
}
