const { default: mongoose } = require("mongoose");
const app = require("./app");

// listen for requests and start the server
app.listen(3000, () => {
  console.log(`Server is running @ http://127.0.0.1:3000`);
});

// connect to the database
mongoose.connect("mongodb+srv://Fayaz:mongo123@atlas.2ecro.mongodb.net/")
.then(() => {
  console.log("Connected to the database...");
})
.catch((error) => {
  console.log("Error connecting to the database.......", error);
});