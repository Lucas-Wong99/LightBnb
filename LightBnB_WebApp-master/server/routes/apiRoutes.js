module.exports = function(router, database) {

  router.get('/properties', (req, res) => {
    database.getAllProperties(req.query, 20)
    .then(properties => res.send({properties}))
    .catch(e => {
      console.error(e);
      res.send(e)
    }); 
  });

  router.get('/reservations', (req, res) => {
    const userId = req.session.userId;
    if (!userId) {
      res.error("💩");
      return;
    }
    database.getAllReservations(userId)
    .then(reservations => res.send({reservations}))
    .catch(e => {
      console.error(e);
      res.send(e)
    });
  });

  router.post('/properties', (req, res) => {
    const userId = req.session.userId;
    database.addProperty({...req.body, owner_id: userId})
      .then(property => {
        console.log(property)
        res.send(property);
      })
      .catch(e => {
        console.error(e);
        res.send(e)
      });
  });
    
  // Creates a new reservation
  router.post('/reservation', (req, res) => {
    const userId = req.session.userId;
    const reservation = req.body;
    // const reservation = {property_id: 1, start_date: '2020/01/23', end_date: '2020/02/15'}
    // const userId = 1;

    database.addReservation({...reservation, guest_id: userId})
    .then(reservation => {
      console.log(reservation)
      res.send(reservation);
    })
    .catch(e => {
      console.error(e);
      res.send(e)
    });
  })

  return router;
}