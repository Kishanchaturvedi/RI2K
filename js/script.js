// navbar start
function toggleDropdown(event) {
    event.preventDefault();
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("open");
    var x=document.getElementsByClassName('dropbtn');
    x.classList.toggle()
  }
// navbar end   

// plp start 

// $(document).ready(function () {
//     $("#addtoWHishlist1").click(function () {
//         if ($("#WHishlist-icon1").hasClass('bi-heart')) {
//             $("#WHishlist-icon1").removeClass('bi-heart').addClass('bi-heart-fill text-dark opacity-100')
//         } else {
//             $("#WHishlist-icon1").addClass('bi-heart').removeClass('bi-heart-fill text-dark opacity-100')
//         }

//     }); $("#addtoWHishlist2").click(function () {
//         if ($("#WHishlist-icon2").hasClass('bi-heart')) {
//             $("#WHishlist-icon2").removeClass('bi-heart').addClass('bi-heart-fill text-dark opacity-100')
//         } else {
//             $("#WHishlist-icon2").addClass('bi-heart').removeClass('bi-heart-fill text-dark opacity-100')
//         }

//     });
// });



// $(document).ready(function() {
//     $("#addtoWHishlist1").click(function() {
//         $("#WHishlist-icon1").toggleClass('bi-heart bi-heart-fill text-dark opacity-100');
//     });

//     $("#addtoWHishlist2").click(function() {
//         $("#WHishlist-icon2").toggleClass('bi-heart bi-heart-fill text-dark opacity-100');
//     });
// });

// $(document).ready(function() {
//     $("#addCart").click(function() {
//         $("#addCart-icon").toggleClass('bi-plus-circle-fill bi-check-circle-fill text-dark opacity-100');
//     });
// });

$(document).ready(function() {
    $(" #addtoWHishlist").click(function() {
        var icon = $(this).find("i");
        icon.toggleClass('bi-heart bi-heart-fill text-dark opacity-100');
    });
});


// $(document).ready(function () {
//     $("#addCart").click(function () {
//         if ($("#addCart-icon").hasClass('bi-plus-circle-fill')) {
//             $("#addCart-icon").removeClass('bi-plus-circle-fill').addClass('bi-check-circle-fill text-dark opacity-100')
//         } else {
//             $("#addCart-icon").addClass('bi-plus-circle-fill').removeClass('bi-check-circle-fill text-dark opacity-100')
//         }
//      });
// });
$(document).ready(function () {
$('#addCart').each(function() {
    $(this).click(function() {
        if ($("#addCart-icon").hasClass('bi-plus-circle-fill')) {
            $("#addCart-icon").removeClass('bi-plus-circle-fill').addClass('bi-check-circle-fill text-dark opacity-100')
        } else {
            $("#addCart-icon").addClass('bi-plus-circle-fill').removeClass('bi-check-circle-fill text-dark opacity-100')
        }
    });
});
});


// $(document).ready(function () {
//     $('#addCart').each(function() {
//         $(this).click(function() {
//             var addCartIcon = $(this).find('.addCart-icon');
//             if (addCartIcon.hasClass('bi-plus-circle-fill')) {
//                 addCartIcon.removeClass('bi-plus-circle-fill').addClass('bi-check-circle-fill text-dark opacity-100');
//             } else {
//                 addCartIcon.addClass('bi-plus-circle-fill').removeClass('bi-check-circle-fill text-dark opacity-100');
//             }
//         });
//     });
// });






// var buttons=document.querySelectorAll("#addCart");
//  var arrys=Array.from(buttons);
//  arrys.forEach(item =>{
//     item.addEventListener('click', (e)=>{
        
//     })
//  })



// plp end 

// ptp start 

// $(document).ready(function(){
//     $("#imgBtn").click(function(){
//         $("#imgBtn").addClass('d-none')
//         $("#addCarousel").removeClass('d-none').addClass('d-block')     
//     });
//     $("#closeBtn").click(function(){
//         $("#addCarousel").removeClass('d-block').addClass('d-none')     
//         $("#imgBtn").removeClass('d-none').addClass('d-block')
//     });
// });




$('#owls').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    items:4,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})


// $(document).ready(function() {
//     // Show image and hide buttons when the first button is clicked
//     $('#firstButton').click(function() {
//       $('#firstButton').hide();
//       $('#secondButton').show();
//       $('#myImage').show();
//     });
  
//     // Hide image and show buttons when the second button is clicked
//     $('#secondButton').click(function() {
//       $('#myImage').hide();
//       $('#secondButton').hide();
//       $('#firstButton').show();
//     });
//   });

// ptp end 

