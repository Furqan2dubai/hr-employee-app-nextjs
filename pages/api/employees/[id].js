import React from 'react'
import { PrismaClient } from "@prisma/client"; 
const prisma = new PrismaClient();

export default async function employee_by_id(req, res) { 
    
    if(req.query.id){ 
        if(req.method==='DELETE'){ 
            
            const deleteEmployees = await prisma.employees.delete({
              where: {
                id: req.query.id,
              },
            });
            res.status(204).json({ deleteEmployees });
        } 
        if(req.method==='PUT'){  
            const mydata =  req.body ; 
            const updateEmployees = await prisma.employees.update({
                where: {
                    id: req.query.id,
                },
                data: {
                    name: mydata.name,
                    login: mydata.login,
                    salary: parseInt(mydata.salary)
                },
            });
            res.status(204).json({ updateEmployees }); 
        } 
        res.status(204);
    }
}
