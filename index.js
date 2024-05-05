const cors = require("cors");
const express = require("express");
const app = express();
const Blog = require("./models/blog")
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("connect mongodb");
});

app.get("/blogs", async(req, res) => {
    const response = {};
    //find all database
    await Blog.find()
    .then((res) => {
        Object.assign(response, {
            status: 200,
            message: "Success",
            data: res
        })
    })
    .catch((e) => {
        Object.assign(response, {
            status: 500,
            message: "Server Error",
        })
    })
    return res.status(response.status).json(response);
});

app.get("/blogs/:id", async (req, res) => {
  const response = {};
  const { id } = req.params;
    //get blog by id
  await Blog.findOne({ _id : id })
    .then((res) => {
      Object.assign(response, {
        status: 200,
        message: "Success",
        data: res,
      });
    })
    .catch((e) => {
      Object.assign(response, {
        status: 500,
        message: "Server Error",
      });
    });
  return res.status(response.status).json(response);
});

app.post("/blogs", async (req, res) => {
  const response = {};
  const body = req.body;
    //get blog by id
  await Blog.create(body)
    .then((res) => {
      Object.assign(response, {
        status: 200,
        message: "Success",
        data: res,
      });
    })
    .catch((e) => {
      Object.assign(response, {
        status: 500,
        message: "Server Error",
      });
    });
  return res.status(response.status).json(response);
});

app.delete("/blogs/:id", async (req, res) => {
  const response = {};
  const { id } = req.params;
  //get blog by id
  await Blog.deleteOne({ _id: id})
    .then((res) => {
      Object.assign(response, {
        status: 200,
        message: "Success",
      });
    })
    .catch((e) => {
      Object.assign(response, {
        status: 500,
        message: "Server Error",
      });
    });
  return res.status(response.status).json(response);
});

app.patch("/blogs/:id", async (req, res) => {
  const response = {};
  const { id } = req.params;
  const body = req.body;
  //get blog by id
  await Blog.updateOne({ _id: id }, body)
    .then((res) => {
      Object.assign(response, {
        status: 200,
        message: "Success",
        data: res,
      });
    })
    .catch((e) => {
      Object.assign(response, {
        status: 500,
        message: "Server Error",
      });
    });
  return res.status(response.status).json(response);
});



const port = 8080;
app.listen(port, () =>
  console.log(`server is listening at http://localhost:${port}`)
);
