var fitTopMenu = function() {
    var links = document.getElementById("nav").children;
    links[links.length - 1].style.display = "none";
    for (var i = links.length - 2; i >= 0; i--) {
        links[i].style.display = "inline-block";
    }
    for (var i = links.length - 2; i >= 0; i--) {
        var windowWidth = window.innerWidth || document.documentElement.clientWidth;
        if (links[i].offsetLeft > windowWidth - 250) {
            links[i].style.display = "none";
            links[links.length - 1].style.display = "inline-block";
        }
    }
};
window.onload = fitTopMenu;
window.onresize = fitTopMenu;