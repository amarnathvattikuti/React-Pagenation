import React, { useEffect, useState } from "react";
import axios from "axios";
import PageNumbers from "./pageNumbers";

const Pagenation = () =>{

  const[data, setData] = useState([]);
  const[perPage, setPerPage] = useState([]);

  

  useEffect(() => {
    
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(
      res => { setData(res.data); setPerPage(res.data.slice(0, 5));})
      
  }, []);

  const userData = perPage.map((item) => {
   return (<tr className="" key={item.id}>
      <td className="">{item.id}</td>
      <td className="">{item.title}</td>
      <td className="">{item.body}</td>
      </tr>)
  });
 
  const pageHandler = (pageNum) =>{
    setPerPage(data.slice((pageNum*5)-5, pageNum*5));
  }
  

 return (
   <>
  <div className="ui container" style={{paddingTop: "30px"}}>
    <h1>React Pagenation</h1>
    <p>with Semantic-UI and JSON API</p>
  <table className="ui celled striped teal table tablet stackable">
    <thead className="">
      <tr className="">
      <th className="single line">User id</th>
      <th className="">Title</th>
      <th className="">User Info</th>
      </tr>
      </thead>
      <tbody className="tBody">
      {userData}
      </tbody>
      <tfoot className="">
              <tr className="">
                <th colSpan="3" className="">
                  <div className="ui pagination right floated menu">                 
                      <PageNumbers data={data} pageHandler={pageHandler}/>
                          </div>
                          </th>
                          </tr>
                          </tfoot>
                      </table>
                      </div>

   </>
 );
}
export default Pagenation;