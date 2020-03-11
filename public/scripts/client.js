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
        }
    })
  })


});
