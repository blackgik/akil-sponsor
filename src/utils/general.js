import fs from 'fs';
import excel from 'exceljs';

export function removeFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(`Error deleting file: ${err}`);
    } else {
      console.log(`File deleted: ${filePath}`);
    }
  });
}

export const downloadExcel = async (worksheetTitle, worksheetHearders, rows) => {
  let workbook = new excel.Workbook();
  let worksheet = workbook.addWorksheet(worksheetTitle);
  worksheet.columns = worksheetHearders;

  worksheet.addRows(rows);

  const filePath = `xcels/${worksheetTitle}.xlsx`;
  const fileCode = worksheetTitle;

  workbook.xlsx.writeFile(filePath);

  return { filePath, fileCode };
};
