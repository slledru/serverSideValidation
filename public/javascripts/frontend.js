$(document).ready(() => {

  // Handle submit event
  $('#signup').submit((event) => {
    event.preventDefault()

    // Only proceed if HTML5 UI validation passes
    if ($('#signup')[0].checkValidity()) {

      // Clear out any msgs
      $('#server-side-validation-errors').empty()

      // Make POST request with form field data as POST body
      $.ajax({
        url: '/signup',
        type: 'POST',
        data: $('#signup').serialize(),
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
          displayError(res)
        }
      }) // end ajax
    }
  }) // end submit handler

  $('#login').submit((event) => {
    event.preventDefault()

    // Only proceed if HTML5 UI validation passes
    if ($('#login')[0].checkValidity()) {
      // Clear out any msgs
      $('#server-side-validation-errors').empty()

      // Make POST request with form field data as POST body
      $.ajax({
        url: '/login',
        type: 'POST',
        data: $('#login').serialize(),
        success: (data) => {
          console.log('AJAX SUCCESS:', data)

          if (data.hasOwnProperty('username')) {
            // Append new record to DOM
            $('table').append(
              '<tr>' +
              '<td>' + data.username + '</td>' +
              '<td>' + data.password + '</td>' +
              '</tr>'
            )
          }
        },
        error: (res) => {
          displayError(res)
        }
      }) // end ajax
    }
  }) // end submit handler

  function displayError(res) {
    const responseObj = JSON.parse(res.responseText)
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
}) // end doc ready
