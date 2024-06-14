export const formatLongText = (text: string, maxWordCount: number): string => {
  const words = text.split(" ");
  const truncatedText =
    words.length < maxWordCount
      ? words.join(" ")
      : words.slice(0, maxWordCount).join(" ") + "... ";

  return truncatedText;
};
