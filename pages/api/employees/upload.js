import React from 'react'
import { PrismaClient } from "@prisma/client"; 
const prisma = new PrismaClient();  
 

export default async function upload(req, res) { 
    if(req.method==='POST'){  
        if(req.body.length>0){
            
            req.body.forEach(async element => {      
                const createEmployees = await prisma.employees.create({
                    data: element 
                }); 
            });
        }
        res.status(200).json({ data: req.body });
    } 
}
