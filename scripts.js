$(document).ready(() => {
   $('#mycar').carousel({ interval : 3000 });
   $('#car-btn').click(() => {
       if($('#car-btn').children('span').hasClass('fa-pause')) {
           $('#mycar').carousel('pause');
           $('#car-btn').children('span').removeClass('fa-pause');
           $('#car-btn').children('span').addClass('fa-play');
       }
       else {
           $('#mycar').carousel('cycle');
           $('#car-btn').children('span').removeClass('fa-play');
           $('#car-btn').children('span').addClass('fa-pause');
       }
   });
   $('#login-btn').attr('data-toggle','modal');
   $('#login-btn').click(() => {
       $('#login').modal('show');
   })
   $('#RT-btn').attr('data-toggle','modal');
   $('#RT-btn').click(() => {
       $('#RT').modal('show');
   })
});