import React, { useState, useEffect } from "react";
import "../index.css";
import { fetchImage } from "./fetchMeme";

function Hero() {
  const [meme, setMeme] = useState({
    topText: "Hello",
    bottomText: "My Friend",
    image: "http://i.imgflip.com/1bij.jpg",
  });

  useEffect(() => {
    fetchImage(setMeme);
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setMeme((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchImage(setMeme);
  };

  return (
    <main>
      <header className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Face-smile.svg/2048px-Face-smile.svg.png"
          alt="Header Logo"
        />
        <h1>Meme Generator</h1>
      </header>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleInput}
        />
        <button type="submit">Get a new meme image 🖼</button>
      </form>
      <div className="meme">
        <img src={meme.image} alt="Meme" />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}

export default Hero;
