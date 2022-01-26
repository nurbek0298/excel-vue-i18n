import * as fs from "fs";
import path from "path"

import parseExcel from "./utils/parseExcel.js";
import getAvailableLangs from "./utils/getAvailableLangs.js";
import formatForI18n from "./utils/formatForI18n.js";

export default function ({ filePath, outputDir }) {
  const _outputDir = outputDir || "src/locales"

  if (!fs.existsSync(filePath)) {
    throw new Error(`По пути ${filePath} не найден файл для перевода`)
  }

  console.log("Идет генерация файлов...")

  const dataFromExcel = parseExcel(filePath);

  const langs = getAvailableLangs(dataFromExcel);

  fs.mkdirSync(_outputDir, { recursive: true });

  langs.forEach((lang) => {
    const formattedData = formatForI18n(dataFromExcel, lang);

    const json = JSON.stringify(formattedData, null, 2).replace(/\u00a0/g, " ");

    fs.writeFileSync(`${_outputDir}/${lang}.json`, json);
  });

  console.log(`Файлы успешно сгенерированы в ${_outputDir}`)
}
