'use strict';

$(document).ready(
  
  console.log('document ready for jQuery'),

  function(){

    $('body').css({
      'margin':'0px auto'
      ,'padding':'0px'
      ,'text-align':'center'
    })
    $('body').append('<h1>These are all my friends!</h1>')

  }
)