export const getFormatedFileSize = (size: number) => {
  const unites = ["octet", "Ko", "Mo", "Go", "To"];
  let response = { value: 0, unite: "", level: 0 };
  let isDividing = true;
  let level = 0;
  do {
    if (size / Math.pow(1024, level + 1) > 0.1) {
      isDividing = true;
      response = {
        ...response,
        value: size,
        unite: unites[level],
        level: level + 1,
      };
      level++;
    } else {
      isDividing = false;
    }
  } while (isDividing);

  const formatedSize = size / Math.pow(1024, response.level);

  return `${formatedSize.toString().slice(0, 4)} ${response.unite}`;
};
