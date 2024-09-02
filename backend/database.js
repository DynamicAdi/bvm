import mysql from 'mysql2';
import dotenv from 'dotenv';

const pool = mysql.createPool({
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || 'dynamic_adi0',
    database: process.env.DATABASE || 'bvmhighschool',
}).promise();

// CURD operations
async function getData(tableName) {
    const [data] = await pool.query(`SELECT * FROM ${tableName}`)
    return data;
}

async function getAllTables(tableName, id) {
    const [columns] = await pool.query(`DESCRIBE ${tableName}`)
    const [rows] = await pool.query(`SELECT * FROM ${tableName}`)
    const columnNames = columns.map(col => col.Field);
    return {columnNames, rows}
}

async function deleteEvents(tableName, id) {
    await pool.query(`DELETE FROM ${tableName} WHERE id = ?`, [id])
}

async function updateFunction(tableName, id, title, description, image) {
    await pool.query(`UPDATE ${tableName} SET title=?, dsc=?, imgLink=? WHERE id=?`, [title, description, image, id])
}


async function addItem(tableName, id, title, description, image) {
    await pool.query(`INSERT INTO ${tableName} (id, title, dsc, imgLink) VALUES (?, ?, ?, ?)`, [id, title, description, image])
}

// Listning to tablets
async function getTables() {
    const [data] = await pool.query('SHOW TABLES');
    return data;
}


export {getData, deleteEvents, addItem, updateFunction, getTables, getAllTables}

