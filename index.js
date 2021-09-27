const express = require("express");
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "150mb" }));

app.use(express.static(__dirname + "/public/dist"));

app.get("*", (req, res) => {
	res.sendFile(__dirname + "/public/dist/index.html");
});

app.listen(4000, () => console.log("listening on port http://localhost:4000"));