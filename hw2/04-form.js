const port = process.env.PORT || 5001;

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered
const express = require("express");
const app = express();

// middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// http://localhost:5001/form
app.get("/form", (req, res) => {
  res.send(`
    <html>
      <body>
        <form action="/submit" method="POST">
          <label>
            Name:
            <input type="text" name="name">
          </label>
          <br><br>

          <label>
            Email:
            <input type="email" name="email">
          </label>
          <br><br>

          <label>
            Comments:
            <textarea name="comments"></textarea>
          </label>
          <br><br>

          <label>
		  	Newsletter: 
            <input type="radio" name="newsletter" value="Yes, sign me up for the newsletter.">
            Yes
          </label>
          <label>
		  	
            <input type="radio" name="newsletter" value="No, thank you.">
            No
          </label>
          <br><br>

          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  `);
});

// http://localhost:5001/submit
app.post("/submit", (req, res) => {
  const { name, email, comments, newsletter } = req.body;

  res.send(`
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Comments: ${comments || "n/a"}</p>
    <p>Newsletter: ${newsletter}</p>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
