import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'

export default function single({data , page}) {


    const update = ()=>{
        if(confirm("Are You Sure")){
            try{
                const id = data.id; 
                const vals = {
                    name: document.getElementById('name').value,
                    login: document.getElementById('login').value,
                    salary: document.getElementById('salary').value,
                };
              const del = fetch(`/api/employees/${id}`,{
                method: 'put' ,
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(vals)
              }).then(
                console.log('updated'),
                page('list')
              ); 
            }
            catch(erro){
              alert('Cannot able to update.')
              console.log(erro);
            }
        }

    }
  return (
    <div className='container'>
        <Nav/> 
        <h3>Edit Employee</h3> 
         
        <div className='row m-5' id="form">
            <div className='row m-1'>
                <div className='col-3'><b>Id:</b></div> 
                <div className='col-9'>{data.id} </div>
            </div>
            <div className='row m-1'>
                <div className='col-3'><b>Login:</b></div>
                <div className='col-9'> <input id="login" type="text" defaultValue={data.login}/> </div>
            </div>
            <div className='row m-1'>
                <div className='col-3'><b>Name:</b></div>
                <div className='col-9'> <input id="name" type="text" defaultValue={data.name}/> </div>
            </div>
            <div className='row m-1'>
                <div className='col-3'><b>Salary:</b></div>
                <div className='col-9'> <input id="salary" type="text" defaultValue={data.salary}/> </div>
            </div>   
            <div className='row m-5 text-center'> 
                <button className='btn col-3' onClick={()=>page('list')}>Back</button>
                <button className='btn col-3' onClick={()=>update()} >Save</button>
            </div>   

        </div>  
    </div>
  )
}
