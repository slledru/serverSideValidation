$(document).ready(() => {

  // Handle submit event
  $('form').submit((event) => {
    event.preventDefault()

    // Only proceed if HTML5 UI validation passes
    if ($('form')[0].checkValidity()) {

      // Clear out any msgs
      $('#server-side-validation-errors').empty()

      // Make POST request with form field data as POST body
      $.ajax({
        url: '/signup',
        type: 'POST',
        data: $('form').serialize(),
        success: (data) => {
          console.log('AJAX SUCCESS:', data)

          if (data.hasOwnProperty('username')) {
            // Append new record to DOM
            $('table').append(
              '<tr>' +
              '<td>' + data.username + '</td>' +
              '<td>' + data.email + '</td>' +
              '<td>' + data.firstname + '</td>' +
              '<td>' + data.lastname + '</td>' +
              '<td>' + data.password + '</td>' +
              '</tr>'
            )
          }
        },
        error: (res) => {
          var responseObj = JSON.parse(res.responseText)
          console.log(responseObj)

          if (responseObj.hasOwnProperty('errors')) {
            // There's validation errors to display
            for (e of responseObj.errors) {
              for (m of e.messages) {
                $('#server-side-validation-errors').append(`<li>${m}</li>`)
              }
            }
          }
        }
      }) // end ajax

    }

  }) // end submit handler

}) // end doc ready
