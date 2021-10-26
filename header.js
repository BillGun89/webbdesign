
function header(){

    var html = "";

    html += '<header>';

    html += '    <div class="logo">';
    html += '        <a href="index.html"><img src="logo.png" alt="logo" /></a>';
    html += '    </div>';

    html += '    <div id="test">';
    html += '        <nav>';
    html += '            <ul>';
    html += '            <li><a href="gallery.html">Gallery</a></li>';
    html += '            <li><a href="webshop.html">Webshop</a></li>';
    html += '            <li><a href="about.html">About</a></li>';
    html += '            <li><a href="contact.html">Contact</a></li>';
    html += '            <a href="javascript:void(0);" class="icon" onclick="myFunction()">';
    html += '                       <i class="fa fa-bars"></i>';
    html += '                     </a>';
    html += '                     </ul>';       
    html += '         </nav>';
    html += '    </div>';
    html += '            <script>';
    html += '        function myFunction() {';
    html += '         var x = document.getElementById("test");';
    html += '          if (x.className === "menu") {';
    html += '            x.className += " responsive";';
    html += '          } else {';
    html += '          x.className = "menu";';
    html += '           }';
    html += '           }';
    html += '          </script>';

    html += '</header>';
    document.write(html);
}

