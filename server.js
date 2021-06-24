/*------javascript ------------------*/
const http = require("http");

let server = http.createServer((req, res) => {
  if (req.method === "POST") {
    console.log("ok");
  } else {
    res.setHeader("content-type", "text/html");
    res.end(`<form method="post" action="/">
    <input type="text" name="username" />
    <button>submit</button>
  </form> `);
  }
});

server.listen(5000, err => {
  console.log("server is running on port number 5000");
});



window.fetch('http://localhost:5000/api/fetch-employees').then(data => {
  data.json().then(res => {
    console.log(res)
  }).catch(err => console.log(err))
}).catch(err => console.log(err))