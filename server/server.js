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

app.use(express.json())

const PORT = 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));

app.get('/', (req, res) => {
      res.json("done");
});

app.get('/data', (req, res) => {
    res.json(array);
  });

  app.get(`/delete/:ID`, (req, res) => {
    // res.json("array");
        // let ID  = parseInt (req.params.ID)
        let ID  = (req.params.ID)
        //  res.json(ID);
        // array = array.filter (i=>{return ID != i.id})
        array = array.filter (i=>{return ID != i.id+""})
        res.json(array)
    });






    app.put(`/edit/:ID`, (req, res) => {
      
      let ID  = (req.params.ID)

      array=array.map((element,index)=>{

      if(ID===element.id+""){
             if(element.status === "Public"){
              element.status="Private" 
             }
             else if (element.status==="Private"){
              element.status="Public"

             }
            }
            return element
          })
             res.json(array)      
         })
     






    app.post(`/addrepo`,(req,res)=>{
      let newRepo=req.body.task
            // let newRepo={id:newID,title:req.body.array.title,status:req.body.array.status,language:req.body.array.language}
      // console.log(newRepo)
      if(newRepo.title !=="" && newRepo.status!=="" && newRepo.language!=="")
     { array.push(newRepo)}
    res.json(array)      
    })

    


// let newID = array.length
let array =[
    {
      id: 0,
      title: 'Array',
      status: 'Private',
      language: 'HTML',
      

    },
    {
      id: 1,
      title: 'Object',
      status: 'Public',
      language: 'JavaScript',
   

    }
  ]
   let newID = array.length
  