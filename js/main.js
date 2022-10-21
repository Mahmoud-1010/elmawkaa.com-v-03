let drop_flag =()=>{
    document.getElementById("my-dropdwon").classList.toggle("show")
}


let change_flag = () =>{
    document.getElementById("our-flag").src = "/images/suadi.png";
    document.getElementById("drop-flag").src = "/images/egypt.png";
    document.getElementById("drop-text").innerText = "مصر";
    document.getElementById("header-bg").style.backgroundImage = "url('https://saudi.elmawkaa.com/img/bg/home-bg-sa.jpg')";
}

// let toggle_flag_sd = () =>{
//     // document.getElementById("suadi-country").style.position = "sticy"
// }

// Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.country')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }