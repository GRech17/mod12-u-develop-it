const db = require('./db/database');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');


// middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api', apiRoutes);

// // Create a specific candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
//               VALUES (?,?,?,?)`;
// const params = [11, 'Reagen', 'Teagen', 1];
// ES5 function, not arrow function, to use this
// db.run(sql, params, function(err, result) {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result, this.lastID);
// });


// default response for any other request (not found) catch all
app.use((req, res ) => {
    res.status(404).end();
});

db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});    

