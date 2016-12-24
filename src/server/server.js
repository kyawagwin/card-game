import express from "express";
import http from "http";

import {isDevelopment} from "./settings";

// -----------------------
// setup
const app = express();
const server = new http.Server(app);

// -----------------------
// config
app.set("view engine", "pug");
app.use(express.static("public"));

const useExternalStyles = !isDevelopment;
const scriptRoot = isDevelopment ? "http://localhost:8080/build" : "/build";

app.get("*", (req, res) => {
	res.render("index", {
		useExternalStyles,
		scriptRoot
	});
});

// -----------------------
// startup
const port = process.env.PORT || 3000;
server.listen(port, () => {
	console.log(`started http server on ${port}`);
});