const db = require("../models");

const Genre = db.Genre;

async function getAll(req, res) {
  try {
    const genres = await Genre.findAll();

    return res.status(200).json(genres);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
}

async function create(req, res) {
  try {
    const { nama, deskripsi } = req.body;

    if (!nama) {
      return res.status(400).json({
        message: "Nama genre wajib diisi."
      });
    }

    

    


    



   
