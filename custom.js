
// scroll_top
$(document).ready(function () {
$(window).scroll(function(){
        var window_top = $(window).scrollTop() + 12; 
    
        var div_top = $('#checkdiv').offset().top;
        if (window_top >= div_top) {
                $('nav').addClass('stickydiv');
            } else {
                $('nav').removeClass('stickydiv');
            }
    });  

  $(document).on("scroll", onScroll);

$('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
        $(document).off("scroll");
         $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
         var target = this.hash,
         menu = target;
         $target = $(target);
       $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 600, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#sidebar a').each(function () {
        var currLink = $(this);
       var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#sidebar ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

// button_top
$(function () 
{
    $('#myBtn').bind("click", function () 
        {
            $('html, body').animate({ scrollTop: 0 }, 1200);
                return false;
        });
});

// text type writer
var TxtType = function(el, toRotate, period) 
{
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() 
{
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

        if (this.isDeleting) 
        {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } 
        else 
        {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) 
        {
        delta = this.period;
        this.isDeleting = true;
        } 
        else if (this.isDeleting && this.txt === '') 
        {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() 
        {
        that.tick();
        }, delta);
    };

window.onload = function() 
{
    var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) 
        {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) 
            {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
    document.body.appendChild(css);
};



// graph chart

