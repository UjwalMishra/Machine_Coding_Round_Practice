const express = require("express");
const { User } = require("../model/User");
const router = express.Router();

const users = require("../Data/Dummydata.json");

router.get("/data", async (req, res) => {
  let limit = req.query.limit || 10;
  let page = req.query.page || 1;

  limit = parseInt(limit);
  page = parseInt(page);

  const skip = (page - 1) * limit;

  const data = await User.find({}).skip(skip).limit(limit);

  const totalUsers = users.length;
  const totalPages = Math.ceil(totalUsers / limit);

  return res.status(200).json({
    success: true,
    data: data,
    totalUsers,
    totalPages,
    currPage: page,
  });
});

router.post("/fillData", async (req, res) => {
  try {
    await User.insertMany(users);
    console.log("✅ Demo data inserted!");
    return res.status(200).json({
      success: true,
      msg: "Data get added",
    });
  } catch (err) {
    console.log("Error while seeding data");
  }
});

module.exports = router;
