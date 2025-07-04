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

router.get('/:user_id', ensureAuthenticated, (req, res) => {

  // To ensure that only the logged-in user can access their own journal
  
  if (parseInt(req.params.user_id) !== req.user.id) {
    return res.status(403).send('Forbidden');
  }

    const user_id = req.params.user_id;

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
  
  if (parseInt(req.params.user_id) !== req.user.id) {
    return res.status(403).send('Forbidden');
  }

    const user_id = req.params.user_id;
    const title = req.body.title;
    const text = req.body.text;

    const queryText = `
   
              INSERT INTO "journal"

                ("title", "text")
                
              VALUES

                ($1, $2);

    `;

    pool.query(queryText, [user_id, title, text])
    .then((result) => {
      res.send(201);
    })
    .catch((error) => {
      console.log('error in queryText', error);
      res.sendStatus(500);
    })
});

// DELETE ROUTE

// PUT ROUTE




module.exports = router;