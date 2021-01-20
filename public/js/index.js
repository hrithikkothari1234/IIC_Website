function img_clicked(img) {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}

// load yt embeds faster
window.onload = function() {
    var yt_vids = document.getElementsByClassName('youtube-video-place');

    for (var i = 0; i < yt_vids.length; i++) {
        yt_vids[i].onclick = function () { 
            this.innerHTML = '<iframe class="card-img-top" src="https://www.youtube.com/embed/'+this.dataset.id+'"></iframe>';
        } 
    }

    // Scroll to Event when clicked in accordion
    var event_names = document.getElementsByClassName('event-name');

    for (var i = 0; i < event_names.length; i++) {
        event_names[i].onclick = function () { 
            var id = this.getAttribute('data-value');
            // document.getElementById(id).scrollIntoView({
            //     behavior: 'smooth'
            // });
            var element = document.getElementById(id); 
            var headerOffset = 100; 
            var elementPosition = element.getBoundingClientRect().top; 
            var offsetPosition = elementPosition - headerOffset; 
            window.scrollTo( { top: offsetPosition, behavior: "smooth" } );
        }
    }
}

var mybutton = document.getElementById("scroll");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


