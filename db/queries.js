const { Pool } = require('pg');

const db = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
});


const mapsWithAssociatedPoints = (mapId) => {
  return db.query(`SELECT * FROM maps JOIN points ON maps.id=map_id WHERE maps.id=$1`, [mapId])
  .then(data => {
    return data.rows[0];
  })
  .catch(err => {
    console.log('Error: ', err);
  })
}

const getPointsByUserId = (userId) => {
  return db.query(`SELECT * FROM points JOIN users ON users.id = user_id WHERE user_id = $1`, [userId])
  .then(data => {
    return data.rows;
  })
  .catch(err => {
    console.log('Error: ', err);
  })
}


const addMyPoints = (point) => {
  return db.query(`INSERT INTO points (user_id, map_id, name, address, lat, lng, type)
                  VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *; `,
            [point.user_id, point.map.id, point.name, point.address, point.lat, point.lng, point.type])
  .then(res => {
    return res.rows;
  })
  .catch(err => {
    console.log('Error: ', err);
  })
}

const getUserByEmail = (email) => {
  return db.query(`SELECT * FROM users WHERE email=$1`, [email])
  .then(data => {
    return data.rows[0];
  })
  .catch(err => {
    console.log('Error: ', err);
  })
}

const getMapByType = (type) => {
  return db.query(`SELECT * FROM maps WHERE type=$1;`, [type])
  .then(data => {
    return data.rows;
  })
  .catch(err => {
    console.log('Error: ', err);
  })
}



module.exports = { addMyPoints, mapsWithAssociatedPoints, getUserByEmail, mapsWithAssociatedPoints, getPointsByUserId, getMapByType };
