 
import { PrismaClient } from "@prisma/client"; 
const prisma = new PrismaClient();
 
 
export default async function all(req, res) {   
 
  if(req.method==='GET'){
    const employees_data = await prisma.employees.findMany(); 
    res.status(200).json({  employees_data })
  }

}
