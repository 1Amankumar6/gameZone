function loaderAnimation() {
  var loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.top = "-130%";
  }, 5200);
}
loaderAnimation();

document.getElementById("menu-button").addEventListener("click", function () {
  var dropdownMenu = document.getElementById("dropdown-menu");
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
});

// Optional: Close dropdown menu when clicking outside
document.addEventListener("click", function (event) {
  var isClickInside = document.getElementById("nav-bar").contains(event.target);
  if (!isClickInside) {
    document.getElementById("dropdown-menu").style.display = "none";
  }
});

// /* Ensure the container and boxes are sized correctly */
// .background {
//   /* overflow: hidden; */
//   width: 430px; /* Set container width */
//   height: 320px; /* Set container height */
//   position: relative;
//   display: flex; /* Align children horizontally if needed */
// }

// .background-wrapper {
//   display: flex;
//   width: 100%;
//   height: 100%;
//   /* Remove transition and positioning styles for manual control */
// }

// .boxContent {
//   margin-right: 20px;
//   width: 430px; /* Ensure each boxContent has the correct width */
//   height: 320px; /* Ensure each boxContent has the correct height */
//   flex-shrink: 0; /* Prevent flex items from shrinking */
//   box-sizing: border-box;
//   transition: transform 0.3s ease-in-out; /* Smooth scale transition */
// }

// /* Scale effect on hover */
// .boxContent:hover {
//   transform: scale(1.1); /* Scale up the boxContent */
// }

// /* Style for images inside .box-1 */
// .box-1 img {
//   width: 100%; /* Make images responsive to the container's width */
//   height: auto; /* Maintain aspect ratio */
// }

// /* Title font styling */
// .titleFont {
//   text-align: center;
//   margin-top: 10px; /* Space between image and title */
// }

// /* Optional: styling for the add-more box */
// #add-more {
//   background-color: #f0f0f0; /* Example background color */
//   border: 2px dashed #ccc; /* Example border style */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 24px; /* Example icon size */
//   cursor: pointer; /* Show a pointer cursor on hover */
// }

// #add-more i {
//   color: #333; /* Icon color */
// }

// /* Optional: add hover effect for links */
// .titleFont a {
//   text-decoration: none; /* Remove underline */
//   color: #007bff; /* Example link color */
// }

// .titleFont a:hover {
//   text-decoration: underline; /* Underline on hover */
// }
