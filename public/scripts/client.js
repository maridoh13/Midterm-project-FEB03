$(() => {
  $("#submitForm").click(() => {
    console.log('in ajax');
    console.log(req.body);
    $.ajax({
      url: '/api/points',
      method: 'POST',
      data: JSON.stringify(params),
      dataType: "json",
      beforeSend: function(xhr) {
        xhr.setRequestHeader("Content-Type", "application/json");
      }
    })


  })

})
