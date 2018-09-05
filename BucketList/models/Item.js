const db = require('../database/connection');

const Item = {};


Item.all = () => {
  return db.any('SELECT * FROM items');
};

Item.create = newItem => {
  return db.one(
    'INSERT INTO items (item_name) VALUES (${item_name}) RETURNING *',
    newItem,
  );
};

Item.delete = id => {
  return db.result('DELETE FROM items WHERE id = ${id}', { id: id });
};

module.exports = Item;