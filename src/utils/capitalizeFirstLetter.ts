export const capitalizeFirstLetter = (inputString: string): string => {
  const charactersArray = inputString.split("");
  const firstLetterCapitalized = charactersArray[0].toLocaleUpperCase();
  const remainingLetters = charactersArray.slice(1);
  const capitalizedResult = firstLetterCapitalized + remainingLetters.join("");

  return capitalizedResult;
};
