export default (data, lang) => {
  let res = {};

  for (let key in data) {
    data[key].forEach((item) => {
      res[key] = { ...res[key], [item.key]: item[lang] };
    });
  }

  return res;
};
