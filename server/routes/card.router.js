const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy'); 
const router = express.Router();

// const router = express.Router();
// router.get('/', (req, res) => {
//   const query = `
//     SELECT * FROM "category"
//   `;
//   pool.query(query)
//     .then(result => {
//       res.send(result.rows);
//     })
//     .catch(err => {
//       console.log('ERROR: Get all category', err);
//       res.sendStatus(500)
//     })

// });

router.get('/', (req, res) => {
    const query = `
    SELECT * FROM "card"
    `;

    pool.query(query)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log ('error in get all cards', error);
            res.sendStatus(500);
        })
});

// PUT - to like and unlike

router.put('/:id', (req, res) => {

    let {id} = req.params;

    const sqlText = `

            UPDATE "card" SET "is_liked" = NOT "is_liked"
            WHERE "id" = $1;
    
    `;

    pool.query(sqlText, [id])
        .then((result)=> {
            console.log('got stuff back from data base', result);
            res.sendStatus(201);
        })
        .catch((error) =>{
        console.log(`Error making database query `, error);
          res.sendStatus(500); // Good server always responds
        }) 
            
});


module.exports = router;