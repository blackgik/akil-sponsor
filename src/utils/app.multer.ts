import multer from 'multer';
import fs from 'fs';
import { BadRequestError } from './exceptions/http.exception';
//adjust how files are stored
const storage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    let dir = process.cwd();
    //Sets destination for fileType
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg'
    ) {
      dir = dir + `/uploads/images`;
    } else {
      dir = dir + `/uploads/pdfs`;
    }

    fs.mkdir(dir, { recursive: true }, (err) => {
      if (err) {
        cb(err, null);
      }
      cb(null, dir);
    });
  },
  filename: function (req: any, file: any, callback: any) {
    callback(null, Date.now() + '_' + file.originalname);
  }
});

const fileFilter = function (req: any, file: { mimetype: string; }, callback: (arg0: BadRequestError | null, arg1: boolean) => void) {
  if (
    file.mimetype === 'application/pdf' ||
    file.mimetype === 'application/msword' ||
    file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
    file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
    file.mimetype === 'text/csv'
  ) {
    callback(null, true);
  } else {
    callback(
      new BadRequestError(400,'Error uploading file, Must either be Jpgs, docx,doc, png or csv',''),
      false
    );
  }
};

// const fileSize = function () {
//   let size = 1024 * 1024 * 2;
//   if (file.mimetype === 'application/pdf' || file.mimetype === 'application/msword') {
//     size = 1024 * 1024 * 1;
//     return size;
//   } else return size;
// };

// export const upload = multer({
//   fileF
  
//   ilter,
//   limits: {
//     fileSize: fileSize
//   },
//   storage: storage
// });
