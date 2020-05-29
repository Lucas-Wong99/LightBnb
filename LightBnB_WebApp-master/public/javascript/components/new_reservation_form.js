$(() => {


  const $newReservationForm = $(`
  <form id="reservation-form" class="reservation-form">
      <p>Reservation</p>
      <div class="reservation-form__field-wrapper">
        <input type="date" name="start_date" placeholder="Start-date">
      </div>

      <div class="reservation-form__field-wrapper">
          <input type="date" name="end_date" placeholder="End-date">
        </div>

      <div class="reservation-form__field-wrapper">
          <button>Reserve A House!</button>
          <a id="reservation-form__cancel" href="#">Cancel</a>
      </div>
    </form>
  `);

  window.$newReservationForm = $newReservationForm;


  $newReservationForm.on('submit', function(event) {
    event.preventDefault();
    console.log(propertyID)
    let data = $(this).serialize();
    data += `&property_id=${propertyID}`
    console.log(data)
    submitReservation(data)
      .then(json => {
        console.log(json);
        if (!json.guest_id) {
          views_manager.show('error', 'Please login to reserve this property');
          return;
        }
        views_manager.show('listings');
      }) 
  });


});
/// Maybe steal this later
/*
getAllReservations()
.then(function(json) {
  propertyListings.addProperties(json.reservations, true);
  views_manager.show('listings');
})
.catch(error => console.error(error));
*/
/*
  $logInForm.on('submit', function(event) {
    event.preventDefault();

    const data = $(this).serialize();
    logIn(data)
      .then(json => {
        console.log(json);
        if (!json.user) {
          views_manager.show('error', 'Failed to login');
          return;
        }
        console.log(json.user);
        header.update(json.user);
        views_manager.show('listings');
      });
  });

  $('body').on('click', '#login-form__cancel', function() {
    views_manager.show('listings');
    return false;
  });
*/