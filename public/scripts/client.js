$( document ).ready(function() {
  console.log("before click")
  $("#submitForm").on("click",() => {
    let $form = $('#my-form');
    event.preventDefault();
    const formData = $form.serialize();
    console.log("Formdata submitted", formData);

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





});
