import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
//For  img w/not the same sizes
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
//For properly send a request
app.use(cors());

const CONNECTION_URL = "mongodb+srv://htcvhs:htcvhsjavascriptmastery@cluster0.dzpl0.mongodb.net/?retryWrites=true&w=majority";
//!Before deployment creat environement secure
const PORT = process.env.PORT || 5000;
//?PORT 5000 but Hiroku gonna generate another??

mongoose
	.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	//useNewUrlParser&useUnifiedTopology Not necessarly but for the terminal(retourne une promesse d'ou chaine then&catch)
	.then(() => app.listen(PORT, () => console.log(`Server running on port:${PORT}`)))
	//If connetion successfull call our App to be listen except the port and the function
	.catch((error) => console.log(error.message)); //If connetion NOT successfull call error

mongoose.set("useFindAndModify", false); //to don(t get any warnings in the console)

//https://www.mongodb.com/cloud/atlas
//mongodb more precisely the atlas ckoud gonna be the host of our database
