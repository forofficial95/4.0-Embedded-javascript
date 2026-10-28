import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    const today = new Date();
 const day = today.getDay();

 // console.log(day);
let type = "a weekday";
let adv = "it's time to work hard!";

if (day === 6 || day === 0) {
    type = "the weekend";
    adv = "it's time to have some fun !";
}

  res.render("index.ejs",{
    dayType: "a weekday",
    advice: "it's time to work!"
  });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

