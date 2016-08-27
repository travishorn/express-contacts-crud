const express = require('express');

const Contact = require('../models/contact');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    Contact
      .where(req.query)
      .fetchAll()
      .then((contacts) => {
        res.json({ contacts });
      });
  })
  .post((req, res) => {
    new Contact({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailAddress: req.body.emailAddress,
    })
      .save()
      .then((saved) => {
        res.json({ saved });
      });
  });
  
router.route('/:id')
  .put((req, res) => {
    Contact
      .where('id', req.params.id)
      .fetch()
      .then((contact) => {
        contact.save({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          emailAddress: req.body.emailAddress,
        })
        .then((saved) => {
          res.json({ saved });
        });
      });
  })
  .delete((req, res) => {
    Contact
      .where('id', req.params.id)
      .destroy()
      .then((destroyed) => {
        res.json({ destroyed });
      });
  });
  
  module.exports = router;
  