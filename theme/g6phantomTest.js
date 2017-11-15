var page = require('webpage').create();
var phantomData = require('./phantomData.json');

var url = phantomData.url;

var h = 500;
var w = 950;
var t = 286;
var l = 420;

var getNameFromUrl = function(url) {
    var nameList = [];
    var max = url.length;
    var name;
    var arr = [];

    if (url.length > 0) {
        for (var i = 0; i < max; i++) {
            arr = url[i].split('/');
            name = arr.pop();
            path2 = arr.pop();
            nameList[i] = "g6/" + path2 + "/" + name.slice(0, -5);
        }
    }
    return nameList;
}


var creatImg = function(url, nameList) {
    var name = nameList.pop();
    var output = "../static/images/" + name + ".png";
    var curUrl = url.pop();
console.log(curUrl, output)
    if(!curUrl) return;
    page.open(curUrl, function(status) {
        if (status !== 'success') {
            phantom.exit(1);

        } else {
            window.setTimeout(function() {

                page.render(output);

                if (url.length > 0) {
                    creatImg(url, nameList);
                } else {
                    phantom.exit();
                }
            }, 5000);
        }

    });

}

page.viewportSize = {
    width: w,
    height: h
};
page.clipRect = {
    top: t,
    left: l,
    width: w,
    height: h
};

var nameList = getNameFromUrl(url);
creatImg(url, nameList);
