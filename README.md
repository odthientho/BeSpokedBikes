# BeSpokedBikes
## Description 
BeSpoked Bikes is looking to create a sales tracking application. BeSpoked is a high-end bicycle shop and each salesperson gets a commission for each bike they sell. They are introducing a new quarterly bonus based on sales as an incentive.

  ## Table of Contents
  - [Installation](#installation)
  - [Features](#features)
  - [Screenshots](#screenshots)
  - [Packages](#Packages)
  - [Questions](#questions)

## Installation
  ```
  git clone https://github.com/odthientho/BeSpokedBikes.git
  ```
  To install packages:
  ```
  npm i
  ```
  To create database and seed database: (setup enviroments .env)
  ```
  source schema.sql
  npm run seed
  ```
  
## Features 
```
o Display a list of salespersons
o Update a salesperson
o Display a list of products
o Update a product
o Display a list of customers
o Display a list of sales. Optionally filter by date range. This should include the Product, Customer, Date, Price, Salesperson, and Salesperson Commission.
o Create a sale
o Display a quarterly salesperson commission report
```
  
## Screenshots 
* Homepage with services:
![Homepage](./images/home-page.png)

## Packages
``` 
        "bcrypt": "^5.0.0",
        "connect-session-sequelize": "^7.0.4",
        "dotenv": "^8.2.0",
        "express": "^4.18.2",
        "express-handlebars": "^5.2.0",
        "express-session": "^1.17.1",
        "gridjs": "^6.0.6",
        "mysql2": "^2.2.5",
        "sequelize": "^6.3.5"
```

## Questions
If you have any questions about the repo, open an issue or contact us directly at odthientho@gmail.com. 

You can find more our projects at [odthientho](https://github.com/odthientho/), 