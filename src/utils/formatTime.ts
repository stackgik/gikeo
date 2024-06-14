export const formatTime = (time: number) => {
  const hours = ~~(time / 60); //Math.floor() can be substituted with ~~(two tildes)
  const minutes = time % 60;
  return `${hours > 0 ? hours + "h" : ""} ${minutes}m`;
};
