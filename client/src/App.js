import React, { Component } from 'react';
import Table from './components/Table';
import Add from './components/Add';
import uuid from 'uuid'
import axios from 'axios'


export default class App extends Component {
  state = {
    repos: []
    // [
    //   {
    //     id: uuid(),
    //     title: 'Array',
    //     status: 'Private',
    //     language: 'HTML',
        

    //   },
    //   {
    //     id: uuid(),
    //     title: 'Object',
    //     status: 'Public',
    //     language: 'JavaScript',
     

    //   }
    // ],

  };

  




             //delete fun in react

  // deleterepo=(id)=>{
  //   let afterdelete = this.state.repos.filter((element)=>{return element.id !== id})
  //   this.setState({repos:afterdelete})

    
  // }

            // finish delete in react




              //delete in axios -express
    deleterepo=(ID)=>{
    axios.get(`http://localhost:9000/delete/${ID}`); 
     this.readrepo();
    
  }
              // finish delete in axios - express




                // add in react
  // addrepo=(item)=>{
 
  //   let newstate = this.state.repos
  //   if(item.title !=="" && item.status!=="" && item.language!==""){
  //   newstate.push(item)}
    
  //   this.setState({repos:newstate})
  // }

                //finish add in react




                



                // add in axios - express
  addrepo=(item)=>{
 
    axios.post(`http://localhost:9000/addrepo`,{
      
      task:item
      
      
    })
    .then(({data})=> {
      // console.log(response);
      this.setState({repos:data})
    })
    .catch(function (error) {
      console.log(error);
    }); 
    this.readrepo();
  }


                //finish add in axios-express






                 // edit in react 
  // editrepo=(id)=>{
  //     console.log("CHECK")

      
  //     let newcheck=this.state.repos.map((element,index)=>{

       
  //        if(id===element.id){
  //             if(element.status === "Public"){
  //               element.status="Private" 
  //             }
  //             else if (element.status==="Private"){
  //               element.status="Public"

  //             }

  //         }
  //         return element

  //     })
  //     this.setState({repos:newcheck})

  // }

                  //end edit in react





                 // edit in react 

  editrepo=(ID)=>{
  
    axios.put(`http://localhost:9000/edit/${ID}`)
    .then((res)=>{
      const repos =res.data;
      this.setState({repos})
    })
    this.readrepo();

    }
            
                 //end edit in react
            
            
            


            
            
                  //read an array from server

  readrepo=()=>{
    axios.get(`http://localhost:9000/data`).then((res)=>{
      const repos =res.data;
      this.setState({repos})
  })}
                  // fifnsh read array from server





                  // for execute readrepo function auto fronm start the program
  componentDidMount(){
    this.readrepo();
  }
                  // end execute



                  
  render() {
    const {repos}=this.state
    const {deleterepo,addrepo, editrepo,isPrivate}=this
    return (
      <div style={{ border: 'black 1px solid' }}>
        <Add addrepo={addrepo} reposadd={repos}/>
       <Table reposparent={repos} deleteparent={deleterepo} editrepo={editrepo} isPrivate={isPrivate} />
      {/* <button onClick={this.addrepo.bind(this,{id: 2,
        title: 'Object',
        status: 'Public',
        language: 'JavaScript'})}>AddItem</button> */}
          {/* <button onClick={getrepo}>Get repo</button> */}
      </div>
    );
  }
}
