$(document).ready(function() {
  $("#submitForm").on("click",() => {
    let $form = $('#my-form');
    event.preventDefault();
    const formData = $form.serialize();

    $.ajax({
      url: '/api/points',
      method: 'POST',
      data: formData,
      success: function(formData) {
        console.log('success');
        window.location.reload();
      }
    })
  })

  $(".delete-form").on("click", ({target}) => {
    const pointId = $(target).parent().attr("id");
    $.ajax({
      url: `/api/points/${pointId}`,
      method: 'DELETE',
      success: function() {
        window.location.reload()
      }
    })
  })


  $(".point").on('click', function () {
    $(this).parent().find(".point-description").slideToggle(500);
  });

  $(".fav-item").on('click', function() {
    let $fav = $(this)
    let mapId = $fav.attr("data")

    $.ajax({
      url: `/favs/${mapId}`,
      method: 'POST',
      data: mapId,
      success: function($fav) {
        console.log('successfully sent favs to db');
        window.location.reload();
      }
    })
  })

  $(".delete-icon").on("click", function() {
    const $this = $(this).data('favid')

    $.ajax({
      url: `/favs/${$this}`,
      method: 'DELETE',
      success: function() {
        window.location.reload()
      }
    })
  })


});
