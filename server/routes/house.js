const express = require("express");
const House = require("../models/House");

const router = express.Router();

// Create a new house
router.post("/", async (req, res) => {
  const { title, address, price, description } = req.body;

  try {
    const newHouse = new House({
      title,
      address,
      price,
      description,
    });

    const house = await newHouse.save();
    res.status(201).json(house);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all houses
router.get("/", async (req, res) => {
  try {
    const houses = await House.find();
    res.status(200).json(houses);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Get a house by ID
router.get("/:id", async (req, res) => {
  try {
    const house = await House.findById(req.params.id);

    if (!house) {
      return res.status(404).json({ message: "House not found" });
    }

    res.status(200).json(house);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Update a house by ID
router.put("/:id", async (req, res) => {
  const { title, address, price, description } = req.body;

  try {
    const house = await House.findById(req.params.id);

    if (!house) {
      return res.status(404).json({ message: "House not found" });
    }

    house.title = title || house.title;
    house.address = address || house.address;
    house.price = price || house.price;
    house.description = description || house.description;

    await house.save();
    res.status(200).json(house);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete a house by ID
router.delete("/:id", async (req, res) => {
  try {
    const house = await House.findById(req.params.id);

    if (!house) {
      return res.status(404).json({ message: "House not found" });
    }

    await house.remove();
    res.status(200).json({ message: "House removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
