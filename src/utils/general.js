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

export const capitalizeWords = (str) => {
  return str
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\B\w/g, (char) => char.toLowerCase());
};

export const formatAmount = (amount) => {
  let formattedAmount = parseFloat(amount).toFixed(2);
  formattedAmount = formattedAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return formattedAmount;
};

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

export function capitalizeFirstLetter(sentence) {
  // Split the sentence into an array of words
  let words = sentence.split(' ');

  // Iterate through each word in the array
  for (let i = 0; i < words.length; i++) {
    // Capitalize the first letter of each word
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }

  // Join the words back into a sentence
  return words.join(' ');
}

export function generateId(index) {
  return (index + 1).toString().padStart(3, '0');
}
