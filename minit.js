(function () {
    var COLOR = "#1FB61A";
    var input = document.getElementsByTagName("pre")[0].lastChild;
    var url = "http://heterotopos.free.fr/index.php?post/2010/05/24/Le-lambda-calcul-pour-les-nuls";
    mini.info = info;
    mini.info("" 
    + "<a href=\"" + url + "\" style=\"color:" + COLOR + "\">"
    + "Le lambda calcul pour les nuls!"
    + "</a>"
    );
    function info (msg) {
        this.log("- ");
        input.previousSibling.style.color = COLOR;
        input.previousSibling.innerHTML += msg;
    }
})();
