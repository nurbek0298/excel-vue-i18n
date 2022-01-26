import excelToJson from "convert-excel-to-json";

export default (sourceFile) => {
  return excelToJson({
    sourceFile,
    header: {
      rows: 1,
    },
    columnToKey: {
      "*": "{{columnHeader}}",
    },
  });
};
