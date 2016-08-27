const bookshelf = require('../bookshelf');

const Contact = bookshelf.Model.extend({
  tableName: 'contacts',
});

module.exports = Contact;
