-- CreateTable
CREATE TABLE "Employees" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "login" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "salary" INTEGER NOT NULL
);

INSERT INTO Employees(id,login,name,salary) 
VALUES(e0001,hpotter,Harry Potter,1234.00)
VALUES(e0002,rwesley,Ron Weasley,19234.50) 