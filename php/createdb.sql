CREATE DATABASE farmer
-- Create the table in the specified schema

CREATE TABLE customers
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, -- primary key column
    cFirstName VARCHAR(100) NOT NULL,
    cLastName   VARCHAR(100) NOT NULL,
    cPassword   VARCHAR(100) NOT NULL,
    cAddress VARCHAR(225) NOT NULL,
    cEmail VARCHAR (100) NOT NULL,
    cPhone VARCHAR (100) NOT NULL,
    cLocalGovernment VARCHAR (100) NOT NULL,
    cState VARCHAR (100) NOT NULL,
    cCountry VARCHAR (100) NOT NULL
    -- specify more columns here
);

CREATE TABLE Sellers
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, -- primary key column
    sFirstName VARCHAR (100) NOT NULL,
    sLastName   VARCHAR(100) NOT NULL,
    cPassword   VARCHAR(100) NOT NULL,
    sAddress VARCHAR(100) NOT NULL,
    sEmail VARCHAR 100 NOT NULL,
    sLocalGovernment VARCHAR 100 NOT NULL,
    sState VARCHAR 100 NOT NULL,
    sCountry VARCHAR 100 NOT NULL
    -- specify more columns here
);

CREATE TABLE Employees
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, -- primary key column
    eFirstName VARCHAR (100) NOT NULL,
    eLastName   VARCHAR(100) NOT NULL,
    cPassword   VARCHAR(100) NOT NULL,
    eAge VARCHAR (100) NOT NULL,
    ePosition VARCHAR (100) NULL,
    eAddress VARCHAR(100) NOT NULL,
    eEmail VARCHAR 100 NOT NULL,
    eLocalGovernment VARCHAR 100 NOT NULL,
    ePhone   VARCHAR(100) NOT NULL,
    eState VARCHAR 100 NOT NULL,
    eCountry VARCHAR 100 NOT NULL,
    eSalary INT (7) NULL
    -- specify more columns here
);


CREATE TABLE Products
(
    id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, -- primary key column
    pName VARCHAR (100) NOT NULL,
    pPrice   INT (10) NOT NULL,
    pUnit    VARCHAR (225) NOT NULL,
    pImage   BLOB NOT NULL,
    pCategory   VARCHAR(100) NOT NULL,
    pSubCategory   VARCHAR(100) NOT NULL,
    pSummary TEXT NOT NULL,
    pDetail   TEXT NOT NULL,
    pQuantity INT(7) NOT NULL,
    sName   VARCHAR(100) NOT NULL,
    sPhone   VARCHAR(100) NOT NULL,
    sAddress VARCHAR (225) NOT NULL,
    sEmail   VARCHAR (100) NOT NULL  
    -- specify more columns here
);

CREATE TABLE Orders
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, -- primary key column
    -- pName VARCHAR (100) NOT NULL,
    -- pPrice   VARCHAR (100) NOT NULL,
    -- pImage   VARCHAR (100) NOT NULL,
    -- pQuantity   INT (100) NOT NULL,
    -- pOrderDate   TIMESTAMP,
    -- pCategory   VARCHAR (100) NOT NULL,
    -- pSubCategory   VARCHAR (100) NOT NULL,
    -- pSummary VARCHAR (225),
    -- pDetail TEXT NOT NULL,
    -- sName VARCHAR (100) NOT NULL,
    pId   INT (100) NOT NULL,
    -- sAddress VARCHAR (100) NOT NULL,
    -- sEmail VARCHAR (100) NOT NULL,
    -- sPhone   VARCHAR(100) NOT NULL,
    -- cName VARCHAR (100) NOT NULL,
    -- cAddress VARCHAR (100) NOT NULL,
    -- cEmail VARCHAR (100) NOT NULL,
    -- cPhone   VARCHAR(100) NOT NULL
    -- specify more columns here
);

GO