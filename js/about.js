let header=document.getElementById("header"),nav_scroll=document.getElementById("nav_scroll"),form_inline=document.querySelector(".form-inline");window.onscroll=function(){scrollY>=500?(header.classList.add("header_2"),nav_scroll.style.opacity="1",form_inline.style.opacity="1"):(header.classList.remove("header_2"),nav_scroll.style.opacity="0",form_inline.style.opacity="0")},$("#owl_latest_posts").owlCarousel({items:1,loop:!0,nav:!0,margin:20,autoplay:!0,autoplayTimeout:2500,autoplayHoverPause:!0,navText:['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>']}),$("#owl_brand").owlCarousel({items:7,loop:!0,nav:!0,margin:0,autoplay:!0,autoplayTimeout:2500,autoplayHoverPause:!0,navText:['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>']}),$("#account").click(function(){$(".test").toggleClass("test2")});let myAccount=document.querySelector("#myAccount"),email_account=document.querySelector("#email_account"),btn_Signup=document.querySelector("#btn_Signup"),btn_Signout=document.querySelector("#btn_Signout");localStorage.getItem("FirstName")&&localStorage.getItem("Email")&&(myAccount.innerHTML=`Hi ${localStorage.getItem("FirstName")}`,email_account.innerHTML=localStorage.getItem("Email"),btn_Signout.style.display="inline-block",btn_Signup.style.display="none"),btn_Signout.addEventListener("click",function(){localStorage.clear(),setTimeout(()=>{window.location="register.html"},1500)}),window.onscroll=function(){scrollY>=400?$("#back-top").css("visibility","visible"):$("#back-top").css("visibility","hidden")},$("#back-top").click(function(){window.scrollTo({top:0,behavior:"smooth"})});