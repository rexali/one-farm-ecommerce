CREATE DATABASE farmer
-- Create the table in the specified schema

CREATE TABLE Customers
(
    id INT NOT NULL PRIMARY KEY, -- primary key column
    cFirstName VARCHAR (50) NOT NULL,
    cLastName   VARCHAR(50) NOT NULL,
    cPassword   VARCHAR(50) NOT NULL,
    cAddress VARCHAR(50) NOT NULL,
    cEmail VARCHAR 50 NOT NULL,
    cLocalGovernment VARCHAR 50 NOT NULL,
    cState VARCHAR 50 NOT NULL,
    cCountry VARCHAR 50 NOT NULL
    -- specify more columns here
);

CREATE TABLE Sellers
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, -- primary key column
    sFirstName VARCHAR (50) NOT NULL,
    sLastName   VARCHAR(50) NOT NULL,
    cPassword   VARCHAR(5) NOT NULL,
    sAddress VARCHAR(50) NOT NULL,
    sEmail VARCHAR 50 NOT NULL,
    sLocalGovernment VARCHAR 50 NOT NULL,
    sState VARCHAR 50 NOT NULL,
    sCountry VARCHAR 50 NOT NULL
    -- specify more columns here
);

CREATE TABLE Employees
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, -- primary key column
    eFirstName VARCHAR (50) NOT NULL,
    eLastName   VARCHAR(50) NOT NULL,
    cPassword   VARCHAR(50) NOT NULL,
    eAge VARCHAR (50) NOT NULL,
    ePosition VARCHAR (50) NULL,
    eAddress VARCHAR(50) NOT NULL,
    eEmail VARCHAR 50 NOT NULL,
    eLocalGovernment VARCHAR 50 NOT NULL,
    ePhone   VARCHAR(50) NOT NULL,
    eState VARCHAR 50 NOT NULL,
    eCountry VARCHAR 50 NOT NULL,
    eSalary INT (7) NULL
    -- specify more columns here
);


CREATE TABLE Products
(
    id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, -- primary key column
    pName VARCHAR (50) NOT NULL,
    pPrice   INT (10) NOT NULL,
    pUnit    VARCHAR (225) NOT NULL,
    pImage   BLOB NOT NULL,
    pCategory   VARCHAR(50) NOT NULL,
    pSubCategory   VARCHAR(50) NOT NULL,
    pSummary TEXT NOT NULL,
    pDetail   TEXT NOT NULL,
    pQuantity INT(7) NOT NULL,
    sName   VARCHAR(50) NOT NULL,
    sPhone   VARCHAR(50) NOT NULL,
    sAddress VARCHAR (225) NOT NULL,
    sEmail   VARCHAR (50) NOT NULL  
    -- specify more columns here
);

CREATE TABLE Orders
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, -- primary key column
    pName VARCHAR (50) NOT NULL,
    pPrice   VARCHAR (50) NOT NULL,
    pImage   VARCHAR (50) NOT NULL,
    pQuantity   INT (50) NOT NULL,
    pOrderDate   TIMESTAMP,
    pCategory   VARCHAR (50) NOT NULL,
    pSubCategory   VARCHAR (50) NOT NULL,
    pSummary VARCHAR (225),
    pDetail TEXT NOT NULL,
    sName VARCHAR (50) NOT NULL,
    sAddress VARCHAR (50) NOT NULL,
    sEmail VARCHAR (50) NOT NULL,
    sPhone   VARCHAR(50) NOT NULL,
    cName VARCHAR (50) NOT NULL,
    cAddress VARCHAR (50) NOT NULL,
    cEmail VARCHAR (50) NOT NULL,
    cPhone   VARCHAR(50) NOT NULL
    -- specify more columns here
);

GO