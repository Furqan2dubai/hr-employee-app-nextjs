import React ,{useEffect, useState} from 'react'
import Nav from './components/Nav'

export default function list({employee_data, page, data}) {

  const [temp_data, set_temp] = useState([]);

  useEffect(()=>{
    set_temp(employee_data);
  },[employee_data]) 

  const del = (id)=>{
    const newArr = temp_data.filter(object => {
      return object.id !== id;
    });
    set_temp(newArr);
  }
  const deleteEmployee = async (id)=>{
    if(confirm("Are You Sure")){
      del(id);
      try{
        const del = fetch(`/api/employees/${id}`,{
          method: 'delete' 
        }).then(
          console.log('deleted') ,
          
        ); 
      }
      catch(erro){
        alert('Cannot able to delete.')
        console.log(erro);
      }
    }
  }
  return (
    <div className='container'>
          <Nav/> 
          <h3>Employees List</h3> 
          <div className='table-responsive  mt-5'>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Login</th>
                  <th scope="col">Name</th>
                  <th scope="col">Salary</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
            
                {temp_data.map((v,i)=>  
                <tr key={i}>
                  <th scope="row">{v.id}</th>
                  <td>{v.login}</td>
                  <td>{v.name}</td>
                  <td>{v.salary}</td>
                  <td>
                    <a className="m-1" href="#" onClick={()=>{data(v);page('single');}}>Edit</a>
                    <a className="m-1" href="#" onClick={()=>{
                      deleteEmployee(v.id);
                      }}>Delete</a>  
                  </td>
              </tr>
              )}
              </tbody>
            </table>

            {temp_data.length==0 && <b>No Data Found...</b>}
          </div>

      </div> 
  )
}
