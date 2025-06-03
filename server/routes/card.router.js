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


module.exports = router;