const { Pool } = require('pg');

const db = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
});

const cb = function(x, data) {
  console.log(data);
}

const browse = (cb) => {
  db.query(`SELECT * FROM points;`)
    .then(data => {
      cb(null, data.rows)
    })
    .catch(err => cb(err));
};

// browse(cb);

const mapsWithAssociatedPoints = (mapId) => {
  return db.query(`SELECT * FROM maps JOIN points ON maps.id=map_id WHERE maps.id=$1`, [mapId])
  .then(data => {
    return data.rows[0];
  })
  .catch(err => {
    console.log('Error: ', err);
  })
}
// mapsWithAssociatedPoints(2);

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


// NOT FINISHED



// const read = (id, cb) => {
//   db.query('SELECT * FROM movie_villains WHERE id = $1;', [id])
//     .then(data => {
//       cb(null, data.rows[0]);
//     })
//     .catch(err => cb(err));
// };

// const edit = (id, villain, cb) => {
//   const sql = 'UPDATE movie_villains SET villain = $2 WHERE id = $1;';
//   const args = [id, villain];
//   db.query(sql, args)
//     .then(() => {
//       cb(null, 'villain updated successfully');
//     })
//     .catch(err => cb(err));
// };

// const add = (villain, movie, cb) => {
//   const sql = 'INSERT INTO movie_villains(villain, movie) VALUES($1, $2);';
//   const args = [villain, movie];
//   db.query(sql, args)
//     .then(() => {
//       cb(null, 'villain created!');
//     })
//     .catch(err => cb(err));
// };

// const del = (id, cb) => {
//   const sql = 'DELETE FROM movie_villains WHERE id = $1;';
//   const args = [id];
//   db.query(sql, args)
//     .then(() => {
//       cb(null, 'villain defeated successfully');
//     })
//     .catch(err => cb(err));
// };

module.exports = { browse, mapsWithAssociatedPoints };
