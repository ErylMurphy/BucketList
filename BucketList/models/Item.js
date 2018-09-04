const db = require('../database/connection');

const Item = {};


Item.all = () => {
  return db.any('SELECT * FROM items');
};


Item.create = newItem => {
  return db.one(
    'INSERT INTO items (column_1, item_name, done) VALUES (${column_1}, ${item_name}, ${done}) RETURNING *',
    newItem,
  );
};
module.exports = Item;