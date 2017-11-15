var page = require('webpage').create();
var phantomData = require('./phantomData.json');

var url = phantomData.url;

var h = 500;
var w = 950;
var t = 486;
var l = 220;

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
            nameList[i] = path2 + "/" + name.slice(0, -5);
        }
    }
    return nameList;
}


// var creatImg = function(url, nameList) {
//     var name = nameList.pop();
//     var output = "../static/demoImg/" + name + ".png";
//     var curUrl = url.pop();

//     console.log("creat image:" + curUrl);
//     page.open(curUrl, function(status) {
//         if (status !== 'success') {

//             console.log(status);
//             console.log('Unable to load the address!');
//             phantom.exit(1);
//         } else {

//             window.setTimeout(function() {
//                 page.render(output);

//                 if (url.length > 0) {
//                     console.log(url.length);
//                     creatImg(url, nameList);
//                 } else {
//                     phantom.exit();
//                 }
//             }, 5000);

//         }

//     });

// }

// page.viewportSize = {
//     width: w,
//     height: h
// };
// page.clipRect = {
//     top: t,
//     left: l,
//     width: w,
//     height: h
// };

// console.log("please wait...");
var nameList = getNameFromUrl(url);

creatImg(url, nameList);
