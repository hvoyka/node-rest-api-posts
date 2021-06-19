import { v4 as uuidv4 } from "uuid";
import * as path from "path";

class FileService {
  saveFile(file) {
    try {
      const fileName = uuidv4() + ".jpeg";
      const filePath = path.resolve("static", fileName);
      file.mv(filePath);
      return fileName;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new FileService();
