export async function fetchImage(setMeme) {
  const response = await fetch("https://api.imgflip.com/get_memes");
  const data = await response.json();

  const randomMeme =
    data.data.memes[Math.floor(Math.random() * data.data.memes.length)];
  setMeme((prev) => ({ ...prev, image: randomMeme.url }));
}
