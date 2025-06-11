const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
app.use(cors())    // data get and put third-party dependency
app.use(express.json())

//db connect
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Poornima@24",
    database: "service_booking"

})
// getting datas as json 
app.get('/', (req,res) => {
    const sql = "SELECT * FROM booking_status";
    db.query(sql, (err,data) => {
        if(err)
            return res.json(err);
        return res.json(data);
    });
});

//create
app.post('/Registration', (req,res) => {
    const sql = "INSERT INTO booking_status (`Name`,`Address`,`Email`,`Mobile`,`Product`,`Mode_ser`,`War_in_year`,`Add_note`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.address,
        req.body.email,
        req.body.mobile,
        req.body.product,
        req.body.mode,
        req.body.war_in_year,
        req.body.notes
    ]
    db.query(sql, [values], (err,data) => {
        if(err) 
            return res.status(500).json({error: err.message});
        return res.json({message: "Data inserted successfully!", data});
    });
});

//Update Data 

//get a single record by ID => Read Data
app.get('/read/:ID', (req,res) => {
    const sql = "SELECT * FROM booking_status WHERE ID = ?";
    const ID = [req.params.ID];
    db.query(sql, [ID], (err,data) => {
        if(err)
            return res.json(err);
        return res.json(data);
    });
});

// Update 
app.put('/Updatedata/:ID', (req,res) => {
    const sql = "UPDATE booking_status SET Name = ?,Address = ?,Email = ?,Mobile =?,Product = ?,Mode_ser = ?,War_in_year = ?,Add_note = ? WHERE ID = ?"
    const ID = req.params.ID;
    const updatevalue = [
        req.body.name,
        req.body.address,
        req.body.email,
        req.body.mobile,
        req.body.product,
        req.body.mode,
        req.body.war_in_year,
        req.body.notes , ID];
    db.query(sql, updatevalue, (err,data) => {
        if(err){
            console.error("Database error:", err);
        return res.status(500).json({error: err.message});
}
return res.json({message: "Data Updated Successfully", data});
    });
});
 
//read
app.get('/readData/:ID', (req,res) => {
    const sql = "SELECT * FROM booking_status WHERE ID = ?";
    const ID = [req.params.ID];
    db.query(sql, [ID], (err,data) => {
        if(err)
            return res.json(err);
        return res.json(data);
    });
});


//Delete
app.delete('/delete/:ID', (req,res) => {
    const sql = "DELETE FROM booking_status WHERE ID= ?";
    const ID = req.params.ID;
    db.query(sql, [ID], (err,data) => {
        if(err)
            return res.json(err);
        return res.json(data);
    });
});

app.listen(8000,() => {
    console.log("Done Server is running")
});
