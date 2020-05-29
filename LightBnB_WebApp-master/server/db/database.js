const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  host: 'localhost',
  database: 'lightbnb',
  password: '123',
  port: 5432
});

module.exports = {
  getUserWithEmail: function(email) {
    return pool.query(
      `
      SELECT *
      FROM users
      WHERE email = $1;
      `, [email])
      .then(res => res.rows[0]);
  }, 

  getUserWithId: function(id) {
    return pool.query(
      `
      SELECT *
      FROM users
      WHERE id = $1;
      `, [id])
      .then(res => res.rows[0]);
  },

  addUser: function(user) {
    return pool.query(`
    INSERT INTO users(name, email, password)
    VALUES ($1, $2, $3) RETURNING *;
    `, [user.name, user.email, user.password])
    .then(res => res.rows[0]);
  },

  getAllReservations: function(guest_id, limit = 10) {
    return pool.query(`
    SELECT reservations.*, properties.*, AVG(rating) AS average_rating
    FROM reservations
    JOIN property_reviews ON reservations.id = reservation_id
    JOIN properties ON reservations.property_id = properties.id
    WHERE end_date < now()::date
    AND reservations.guest_id = $1
    GROUP BY reservations.id, properties.id
    ORDER BY start_date
    LIMIT $2;
    `, [guest_id, limit])
    .then(res => res.rows);
  },

  getAllProperties: function(options, limit = 10) {
    let queryParams = [];

    //determines if clause need to be WHERE or AND
    const check = function (array) {
      return array.length > 0 ? `AND` : `WHERE` ;
    };
  
    let queryString = `
      SELECT properties.*, AVG(property_reviews.rating) AS average_rating
      FROM properties
      LEFT JOIN property_reviews
      ON properties.id = property_id
      `;
  
    if (options.city) {
      const hasLength = check(queryParams);
      queryParams.push(`%${options.city}%`);
      queryString += `${hasLength} city LIKE $${queryParams.length} `;
    }
  
    if (options.owner_id) {
      const hasLength = check(queryParams);
      queryParams.push(options.owner_id);
      queryString += `${hasLength} owner_id = $${queryParams.length} `;
    }
  
    if (options.minimum_price_per_night) {
      const hasLength = check(queryParams);
      queryParams.push(options.minimum_price_per_night * 100);
      queryString += `${hasLength} cost_per_night >= $${queryParams.length} `;
    }
  
    if (options.maximum_price_per_night) {
      const hasLength = check(queryParams);
      queryParams.push(options.maximum_price_per_night * 100);
      queryString += `${hasLength} cost_per_night <= $${queryParams.length} `;
    }
  
    if (options.minimum_rating) {
      const hasLength = check(queryParams);
      queryParams.push(options.minimum_rating);
      queryString += `${hasLength} rating >= $${queryParams.length}`;
    }
    
    queryParams.push(limit);
    queryString += `
    GROUP BY properties.id
    ORDER BY cost_per_night
    LIMIT $${queryParams.length};  
    `;

    return pool.query(queryString, queryParams)
    .then(res => res.rows);
  },

  addProperty: function(property) {
    let queryParams = [property.owner_id, property.title, property.description, property.thumbnail_photo_url, property.cover_photo_url, property.cost_per_night * 100, property.street, property.city, property.province, property.post_code, property.country, property.parking_spaces, property.number_of_bathrooms, property.number_of_bedrooms];
    
    let queryString = `
    INSERT INTO properties(owner_id ,title ,description, thumbnail_photo_url, cover_photo_url, cost_per_night, street, city, province, post_code, country, parking_spaces, number_of_bathrooms, number_of_bedrooms)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *;
    `
    console.log(queryString, queryParams);
    return pool.query(queryString, queryParams)
    .then((res) => res.rows[0]);
  }
}