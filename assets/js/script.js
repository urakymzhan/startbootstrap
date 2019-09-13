/*------------------------------------------------------------------
* Start Bootstrap - Simple Admin Template
* Email: official.startbootstrap@gmail.com
* Version: 1.0
* Author: Brian Luna
* Copyright 2019 Brian Luna
* Website: https://github.com/brianluna/startbootstrap
-------------------------------------------------------------------*/
// Toggle sidebar on Menu button click
$('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
    $('#body').toggleClass('active');
});

// Auto-hide sidebar on window resize if window size is small
// $(window).on('resize', function () {
//     if ($(window).width() <= 768) {
//         $('#sidebar, #body').addClass('active');
//     }
// });

// Initiate time picker
$('.timepicker').mdtimepicker(); 