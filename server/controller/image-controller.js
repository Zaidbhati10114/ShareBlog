import mongoose from "mongoose";
import grid from "gridfs-stream";
const url = "http://localhost:8000";
let gfs;

const conn = mongoose.connection;
conn.once("open", () => {
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("fs");
});

export const uploadImage = (request, response) => {
  try {
    if (!request.file)
      return response.status(404).json("File Not Found Multer Error");

    const imageURL = `${url}/file/${request.file.filename}`;
    response.status(200).json(imageURL);
  } catch (error) {
    response.status(500).json("Error while uploading file", error);
  }
};

export const getImage = async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(res);
  } catch (error) {
    res.status(500).json(error);
  }
};
