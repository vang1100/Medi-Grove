const express = require ('express');
const pool = require('../modules/pool');
const router = express.Router();


// GET ROUTE

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send('Unauthorized');
};

router.get('/', ensureAuthenticated, (req, res) => {

  // To ensure that only the logged-in user can access their own journal
  
    const user_id = req.user.id;

    const queryText = `
   
    SELECT * FROM "journal" WHERE "user_id" = $1;

    `;

    pool.query(queryText, [user_id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('error in queryText', error);
      res.sendStatus(500);
    })
});

// POST ROUTE

router.post('/', ensureAuthenticated, (req, res) => {

  // To ensure that only the logged-in user can access their own journal
  
  // if (parseInt(req.params.user_id) !== req.user.id) {
  //   return res.status(403).send('Forbidden');
  // }

    const user_id = req.user.id;
    const title = req.body.title;
    const text = req.body.text;

    const queryText = `
   
              INSERT INTO "journal"

                ("user_id", "title", "text")
                
              VALUES

                ($1, $2, $3)

                RETURNING *;

    `;

      pool.query(queryText, [user_id, title, text])
    .then((result) => {
      res.status(201).send(result.rows[0]); // Send back the new journal entry
    })
    .catch((error) => {
      console.log('error in journal POST:', error);
      res.sendStatus(500);
    });
});

// DELETE ROUTE
  
router.delete('/:id', ensureAuthenticated, (req, res) => {


    const deleteId = req.params.id

    const queryText = `
   
              DELETE FROM "journal"

              WHERE "id" = $1;

    `;

      pool.query(queryText, [deleteId])
    .then((result) => {
      res.status(201).send(result.rows[0]); // Send back the new journal entry
    })
    .catch((error) => {
      console.log('error in journal POST:', error);
      res.sendStatus(500);
    });
});
// PUT ROUTE


router.put('/:id', ensureAuthenticated, (req, res) => {


    const putId = req.params.id
    const title = req.body.title
    const text = req.body.text
   

    const queryText = `
   
              UPDATE  "journal"

              SET "title" = $1, "text" = $2

              WHERE "id" = $3;

    `;

      pool.query(queryText, [title, text, putId])
    .then((result) => {
      res.status(201).send(); // Send back the new journal entry
    })
    .catch((error) => {
      console.log('error in journal POST:', error);
      res.sendStatus(500);
    });
});

module.exports = router;