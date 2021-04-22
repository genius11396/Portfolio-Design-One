function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function MySelect()
{
    // var option_value = dropdown.options[dropdown.selectedIndex].value;
    // location.href = option_value;
    var x=document.getElementById("country").value;
    location.href=x;
}

function scrollto(div)
{
  $('html,body').animate(
    {
      scrollTop: $("#"+div).offset().top
    },'slow');
}