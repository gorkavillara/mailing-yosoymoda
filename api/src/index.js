const express = require("express");
const path = require("path");

const { mongoose } = require("./database");

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(express.json());

app.get("/api", (req, res) => {
	res.json({
		message: "Welcome to the API"
	});
});

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Starting the server
app.listen(app.get("port"), () => {
	console.log(`server on port ${app.get("port")}`);
});
