﻿# js-intern-assignment (Golden Owl) - Võ Duy Tạo

<p>My application:
<ul>
    <li>Frontend: <a href="https://interview-js-fullstack-duy-tao.vercel.app/" alt="link demo frontend">https://interview-js-fullstack-duy-tao.vercel.app/</a>.</li>
    <li>Backend: 
        <a href="https://shoes-store-ntmt.onrender.com" alt="link demo API">https://shoes-store-ntmt.onrender.com/api/v1/products/ </a> with APIs: 
        <ul>
            <li>GET /api/v1/products: Get all products</li>
            <li>GET /api/v1/products/:id: Get a product by id</li>
            <li>POST /api/v1/products: Create a new product</li>
            <li>PUT /api/v1/products/:id: Update a product by id</li>
            <li>DELETE /api/v1/products/:id: Delete a product by id</li>
        </ul>
    </li>
</ul>

## 1. Guide to run

In Terminal VSCode:

### 1.1 Frontend

<ul>
    <li>1. cd client</li>
    <li>2. add file .env includes: REACT_APP_API=https://shoes-store-ntmt.onrender.com/api/v1/products/
    <li>3. npm start</li>
</ul>

### 1.2 Backend

<ul>
    <li>1. cd server</li>
    <li>2. add file .env includes: MONGO_URI (connect to your Database) and PORT=5000</li>
    <li>3. npm start</li>
</ul>

## 2. Technicals used:

<ul>
    <li>Frontend: HTML, CSS, JS, ReactJs</li>
    <li>Backend: ExpressJs</li>
    <li>Database: MongoDB</li>
</ul>
