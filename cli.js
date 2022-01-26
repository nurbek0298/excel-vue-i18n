#!/usr/bin/env node
import excelToI18n from "./lib/index.js";

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const options = yargs(hideBin(process.argv))
  .option("f", {
    alias: "filePath",
    describe: "Путь до excel файла",
    type: "string",
    demandOption: true,
  })
  .option("o", {
    alias: "outputDir",
    describe: "Куда положить сгенерированные json файлы",
    type: "string",
  }).argv;

excelToI18n(options);
