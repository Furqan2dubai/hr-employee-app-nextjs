import React , {useEffect, useState} from 'react' 
import Single from './single'
import List from './list'

export default function employees() { 
    const [employee_data , set_employee_data] = useState([]);
    const [my_data , set_my_data] = useState([]);
    const [page , setPage] = useState('list');
    const [del , setDel] = useState(0);
 
    const getData = async() =>{
      try{
        const data = await fetch('/api/employees');
        const d = await data.json();
        set_employee_data(d.employees_data);
        // console.log('a'  ,d.employees_data);
      }
      catch(error){
          throw error;
      }
 
  }
  
    useEffect(()=>{
      getData(); 
    }, [page, del ])


    
  return ( <>
  { page =='list' ? <List employee_data={employee_data} page={(e=>setPage(e))} data={e=>set_my_data(e)} refresh={e=>setDel(e)} /> :
  <Single data={my_data} page={e=>setPage(e)} /> }
  </> )
}
