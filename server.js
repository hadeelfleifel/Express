const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});


// console.log("Alaa Aldein")
app.get('/', (req, res) => {
  let x = 2*2
  res.json(`x: ${x}`);
});
app.get('/data', (req, res) => {
  res.json(array);
});

const PORT = 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));

let array = [
  {
    id: 77,
    title: 'pizza',
    isCompleted: true
  },
  {
    id:66,
    title: 'sban5',
    isCompleted: false
  },
  {
    id: 55,
    title: 'aseeeeeem',
    isCompleted: false
  }
]


/*











// app.use(express.json());

const PORT = process.env.PORT || 9000;


*/
