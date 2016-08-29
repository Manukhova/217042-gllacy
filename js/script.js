 var link = document.querySelector(".btn__feedback");
 var popup = document.querySelector(".modal-content");
 var close = popup.querySelector(".modal-content-close");
 var overlay = document.querySelector(".modal-overlay");
 var overclose = overlay.querySelector(".modal-overlay-show");
 var slidebtn = document.querySelector(".slide-btn");
 var basketlink = document.querySelector(".basket__link:nth-child(2)");
 var basketarea = document.querySelector(".basket__area");
 var basketgoods = document.querySelector(".basket__goods");

 link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");
        overlay.classList.add("modal-overlay-show");
      });

 close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
        overlay.classList.remove("modal-overlay-show");
      });

 slidebtn.addEventListener("click", function(event) {
        event.preventDefault();
        basketlink.classList.add("basket__link-show");
        basketarea.classList.add("basket__area-close");
        basketgoods.classList.add("basket__goods-show");

           });
