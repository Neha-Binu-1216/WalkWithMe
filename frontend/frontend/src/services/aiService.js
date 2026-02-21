export const detectDistress = (speechText) => {
  const dangerWords = ["help", "scared", "danger"];
  return dangerWords.some((word) =>
    speechText.toLowerCase().includes(word)
  );
};