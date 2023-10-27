const db = require('./db');

exports.create = (req, res) => {
  const name = req.body.name;
  const price = req.body.price;

  const insertQuery = 'INSERT INTO table1 (name, price) VALUES (?, ?)';
  db.query(insertQuery, [name, price], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    }
  });
};

exports.read = (req, res) => {
  const selectQuery = 'SELECT * FROM table1';
  db.query(selectQuery, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    } else {
      const data = results;
      const dataArray = [];

      data.forEach((row) => {
        dataArray.push({
          id: row.id,
          name: row.name,
          price: row.price,
        });
      });
      res.setHeader('Content-Type', 'application/json');
      res.json({ data: dataArray });
    }
  });
};

exports.update = (req, res) => {
  const id = req.body.id;
  const newName = req.body.newName;
  const newPrice = req.body.newPrice;

  const updateQuery = 'UPDATE table1 SET name = ?, price = ? WHERE id = ?';
  db.query(updateQuery, [newName, newPrice, id], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    }
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  const deleteQuery = 'DELETE FROM table1 WHERE id = ?';
  db.query(deleteQuery, [id], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json({ message: 'Record deleted successfully' });
    }
  });
};
