let header=document.getElementById("header"),nav_scroll=document.getElementById("nav_scroll"),form_inline=document.querySelector(".form-inline");window.onscroll=function(){scrollY>=500?(header.classList.add("header_2"),nav_scroll.style.opacity="1",form_inline.style.opacity="1"):(header.classList.remove("header_2"),nav_scroll.style.opacity="0",form_inline.style.opacity="0")};let getEmail=localStorage.getItem("Email"),getpassword=localStorage.getItem("Password"),Email=document.querySelector("#Email"),password=document.querySelector("#password"),SignIn=document.querySelector("#SignIn");SignIn.addEventListener("click",function(e){e.preventDefault(),""===Email.value||""===password.value?alert("please Fill Data"):getEmail&&getEmail.trim()===Email.value&&getpassword&&getpassword===password.value?setTimeout(()=>{window.location="index.html"},1500):alert("Email or password is Wrong !!")});let myAccount=document.querySelector("#myAccount"),email_account=document.querySelector("#email_account"),btn_Signup=document.querySelector("#btn_Signup"),btn_Signout=document.querySelector("#btn_Signout");$("#account").click(function(){$(".test").toggleClass("test2"),localStorage.getItem("FirstName")&&localStorage.getItem("Email")&&(myAccount.innerHTML=`Hi ${localStorage.getItem("FirstName")}`,email_account.innerHTML=localStorage.getItem("Email"),btn_Signup.style.display="none",btn_Signout.style.display="inline-block")}),btn_Signout.addEventListener("click",function(){localStorage.clear(),setTimeout(()=>{window.location="register.html"},1500)}),window.onscroll=function(){scrollY>=400?$("#back-top").css("visibility","visible"):$("#back-top").css("visibility","hidden")},$("#back-top").click(function(){window.scrollTo({top:0,behavior:"smooth"})});