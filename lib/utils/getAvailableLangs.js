export default (json) => {
  const langs = [];

  Object.values(json).forEach((sheetData) => {
    sheetData.forEach((item) => {
      for (const key in item) {
        if (key !== "key" && !langs.includes(key)) {
          langs.push(key);
        }
      }
    });
  });

  return langs;
};
