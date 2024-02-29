import express from "express";
import { Data } from "../models/dataModel.js";

const router = express.Router();

// Route to save a new data
router.post("/", async (request, response) => {
  try {
    if (!request.body.nom || !request.body.technologie || !request.body.debit) {
      return response.status(400).send({
        message: "Send all required fields: nom, technologie, debit",
      });
    }

    const newData = {
      nom: request.body.nom,
      technologie: request.body.technologie,
      debit: request.body.debit,
    };
    const data = await Data.create(newData);
    return response.status(201).send(data);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route to gel all data from database
router.get("/", async (request, response) => {
  try {
    const datas = await Data.find({});
    return response.status(200).json({
      count: datas.length,
      data: datas,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route to get one data from database by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const data = await Data.findById(id);
    return response.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route to update a data
router.put("/:id", async (request, response) => {
  try {
    if (!request.body.nom || !request.body.technologie || !request.body.debit) {
      return response.status(400).send({
        message: "Send all required fields: nom, technologie, debit",
      });
    }
    const { id } = request.params;

    const result = await Data.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Data not found" });
    }

    return response.status(200).send({ message: "Data updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route to Delete a book
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Data.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Data not found" });
    }

    return response.status(200).send({ message: "Data deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
