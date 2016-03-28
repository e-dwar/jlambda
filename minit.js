(function () {
    var COLOR = "#1FB61A";
    var input = document.getElementsByTagName("pre")[0].lastChild;
    var url1 = "http://heterotopos.free.fr/index.php?post/2010/05/24/Le-lambda-calcul-pour-les-nuls";
    var url2 = "https://raw.githubusercontent.com/e-dwar/jlambda/master/tab3-3e92f.jpg";
    mini.info = info;
    mini.info("" 
    + "<a href=\"" + url1 + "\" style=\"color:" + COLOR + "\">"
    + "Le lambda calcul pour les nuls!"
    + "</a> <a href=\"" + url2 + "\" style=\"color:" + COLOR + "\">"
    + "Help!"
    + "</a>"
    );
    function info (msg) {
        this.log("- ");
        input.previousSibling.style.color = COLOR;
        input.previousSibling.innerHTML += msg;
    }
})();
