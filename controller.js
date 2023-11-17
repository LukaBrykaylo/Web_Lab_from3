const db = require('./db');

exports.read = (req, res) => {
    const { searchQuery, selectedCategory, sortOrder } = req.query;

    // Створіть SQL-запит з урахуванням фільтрів
    let selectQuery = 'SELECT * FROM table1';

    // Додайте умови для фільтрації
    if (searchQuery) {
        selectQuery += ` WHERE description LIKE '%${searchQuery}%'`;
    }

    if (selectedCategory && selectedCategory !== 'all') {
        if (searchQuery) {
            selectQuery += ` AND name = '${selectedCategory}'`;
        } else {
            selectQuery += ` WHERE name = '${selectedCategory}'`;
        }
    }

    if (sortOrder) {
        selectQuery += ` ORDER BY price ${sortOrder.toUpperCase()}`;
    }

    db.query(selectQuery, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
        } else {
            const data = results;
            const dataArray = data.map(row => ({
                id: row.id,
                name: row.name,
                price: `${row.price}$`,
                description: row.description,
            }));

            res.setHeader('Content-Type', 'application/json');
            res.json({ data: dataArray });
        }
    });
};

exports.getProductById = (req, res) => {
    const productId = req.params.productId;
  
    // Додайте SQL-запит для отримання окремого елемента за його ідентифікатором
    const selectQuery = `SELECT * FROM table1 WHERE id = ${productId}`;
  
    db.query(selectQuery, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
        } else {
            const data = results;
            const dataArray = data.map(row => ({
                id: row.id,
                name: row.name,
                price: `${row.price}$`,
                description: row.description,
            }));

            res.setHeader('Content-Type', 'application/json');
            res.json({ data: dataArray });
        }
    });
  };