
/*
Tipue Search 5.0
Copyright (c) 2015 Tipue
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/


/*
Stop words
Stop words list from http://www.ranks.nl/stopwords
*/

var tipuesearch_stop_words = ["a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", "by", "can't", "cannot", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "don't", "down", "during", "each", "few", "for", "from", "further", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "isn't", "it", "it's", "its", "itself", "let's", "me", "more", "most", "mustn't", "my", "myself", "no", "nor", "not", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own", "same", "shan't", "she", "she'd", "she'll", "she's", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too", "under", "until", "up", "very", "was", "wasn't", "we", "we'd", "we'll", "we're", "we've", "were", "weren't", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves"];

var tipuesearch_pages = [
'https://antv.alipay.com/g2/api/animate.html',
'https://antv.alipay.com/g2/api/chart.html',
'https://antv.alipay.com/g2/api/frame.html',
'https://antv.alipay.com/g2/api/geom.html',
'https://antv.alipay.com/g2/api/global.html',
'https://antv.alipay.com/g2/api/index.html',
'https://antv.alipay.com/g2/api/layout.html',
'https://antv.alipay.com/g2/api/scale.html',
'https://antv.alipay.com/g2/api/shape.html',
'https://antv.alipay.com/g2/api/stat.html',
'https://antv.alipay.com/g2/api/util.html',
'https://antv.alipay.com/g2/api/view.html',
'https://antv.alipay.com/g2/doc/history.html',
'https://antv.alipay.com/g2/doc/index.html',
'https://antv.alipay.com/g2/doc/tutorial/advance/chart-type.html',
'https://antv.alipay.com/g2/doc/tutorial/advance/coord-detailed.html',
'https://antv.alipay.com/g2/doc/tutorial/advance/custom-shape.html',
'https://antv.alipay.com/g2/doc/tutorial/advance/data-flow.html',
'https://antv.alipay.com/g2/doc/tutorial/advance/data-type-and-scale.html',
'https://antv.alipay.com/g2/doc/tutorial/advance/draw-word-cloud.html',
'https://antv.alipay.com/g2/doc/tutorial/advance/geom-and-adjust.html',
'https://antv.alipay.com/g2/doc/tutorial/advance/index.html',
'https://antv.alipay.com/g2/doc/tutorial/advance/layout.html',
'https://antv.alipay.com/g2/doc/tutorial/advance/view.html',
'https://antv.alipay.com/g2/doc/tutorial/start/action.html',
'https://antv.alipay.com/g2/doc/tutorial/start/attr.html',
'https://antv.alipay.com/g2/doc/tutorial/start/axis.html',
'https://antv.alipay.com/g2/doc/tutorial/start/changedata.html',
'https://antv.alipay.com/g2/doc/tutorial/start/chart-event.html',
'https://antv.alipay.com/g2/doc/tutorial/start/chart.html',
'https://antv.alipay.com/g2/doc/tutorial/start/col-defs.html',
'https://antv.alipay.com/g2/doc/tutorial/start/coord.html',
'https://antv.alipay.com/g2/doc/tutorial/start/facet.html',
'https://antv.alipay.com/g2/doc/tutorial/start/fqas.html',
'https://antv.alipay.com/g2/doc/tutorial/start/frame.html',
'https://antv.alipay.com/g2/doc/tutorial/start/g2-plugin-slider.html',
'https://antv.alipay.com/g2/doc/tutorial/start/geom.html',
'https://antv.alipay.com/g2/doc/tutorial/start/guide.html',
'https://antv.alipay.com/g2/doc/tutorial/start/index.html',
'https://antv.alipay.com/g2/doc/tutorial/start/label.html',
'https://antv.alipay.com/g2/doc/tutorial/start/legend.html',
'https://antv.alipay.com/g2/doc/tutorial/start/rc-g2.html',
'https://antv.alipay.com/g2/doc/tutorial/start/scale.html',
'https://antv.alipay.com/g2/doc/tutorial/start/stat.html',
'https://antv.alipay.com/g2/doc/tutorial/start/theme.html',
'https://antv.alipay.com/g2/doc/tutorial/start/tooltip.html',
'https://antv.alipay.com/g2/doc/tutorial/start/working-with-data.html',
'https://antv.alipay.com/g2-mobile/api/geom.html',
'https://antv.alipay.com/g2-mobile/api/global.html',
'https://antv.alipay.com/g2-mobile/api/index.html',
'https://antv.alipay.com/g2-mobile/doc/history.html',
'https://antv.alipay.com/g2-mobile/doc/index.html',
'https://antv.alipay.com/g2-mobile/doc/tutorial/event.html',
'https://antv.alipay.com/g2-mobile/doc/tutorial/guide.html',
'https://antv.alipay.com/g2-mobile/doc/tutorial/shape.html',
'https://antv.alipay.com/g6/api/index.html',
'https://antv.alipay.com/g6/api/graph.html',
'https://antv.alipay.com/g6/api/canvas.html',
'https://antv.alipay.com/g6/api/layout.html',
'https://antv.alipay.com/g6/doc/history.html',
'https://antv.alipay.com/g6/doc/index.html',
'https://antv.alipay.com/g6/doc/tutorial/base.html',
'https://antv.alipay.com/g6/doc/tutorial/custom-shape.html',
'https://antv.alipay.com/vis/doc/chart/details/Bullet.html',
'https://antv.alipay.com/vis/doc/chart/details/arcDiagram.html',
'https://antv.alipay.com/vis/doc/chart/details/area.html',
'https://antv.alipay.com/vis/doc/chart/details/bar.html',
'https://antv.alipay.com/vis/doc/chart/details/bi-directional-bar.html',
'https://antv.alipay.com/vis/doc/chart/details/boxplot.html',
'https://antv.alipay.com/vis/doc/chart/details/bubble-chart.html',
'https://antv.alipay.com/vis/doc/chart/details/bubble-map.html',
'https://antv.alipay.com/vis/doc/chart/details/chord.html',
'https://antv.alipay.com/vis/doc/chart/details/choropleth-map.html',
'https://antv.alipay.com/vis/doc/chart/details/color-map.html',
'https://antv.alipay.com/vis/doc/chart/details/contourline.html',
'https://antv.alipay.com/vis/doc/chart/details/distributioncurve.html',
'https://antv.alipay.com/vis/doc/chart/details/donut-chart.html',
'https://antv.alipay.com/vis/doc/chart/details/dot-map.html',
'https://antv.alipay.com/vis/doc/chart/details/funnel.html',
'https://antv.alipay.com/vis/doc/chart/details/gauge.html',
'https://antv.alipay.com/vis/doc/chart/details/heatmap.html',
'https://antv.alipay.com/vis/doc/chart/details/histogram.html',
'https://antv.alipay.com/vis/doc/chart/details/k-chart.html',
'https://antv.alipay.com/vis/doc/chart/details/kagi.html',
'https://antv.alipay.com/vis/doc/chart/details/line.html',
'https://antv.alipay.com/vis/doc/chart/details/mosaic.html',
'https://antv.alipay.com/vis/doc/chart/details/multi-set-bar.html',
'https://antv.alipay.com/vis/doc/chart/details/pie.html',
'https://antv.alipay.com/vis/doc/chart/details/radar-chart.html',
'https://antv.alipay.com/vis/doc/chart/details/radial-bar.html',
'https://antv.alipay.com/vis/doc/chart/details/regressioncurve.html',
'https://antv.alipay.com/vis/doc/chart/details/rose.html',
'https://antv.alipay.com/vis/doc/chart/details/sankey.html',
'https://antv.alipay.com/vis/doc/chart/details/scatter-plot.html',
'https://antv.alipay.com/vis/doc/chart/details/spiral.html',
'https://antv.alipay.com/vis/doc/chart/details/stacked-area.html',
'https://antv.alipay.com/vis/doc/chart/details/stacked-bar.html',
'https://antv.alipay.com/vis/doc/chart/details/stem-leaf.html',
'https://antv.alipay.com/vis/doc/chart/details/treemap.html',
'https://antv.alipay.com/vis/doc/chart/details/venn.html',
'https://antv.alipay.com/vis/doc/chart/details/wordCloud.html',
'https://antv.alipay.com/vis/doc/design/principle/color.html',
'https://antv.alipay.com/vis/doc/design/rule/assist/baseLine.html',
'https://antv.alipay.com/vis/doc/design/rule/assist/otherAssist.html',
'https://antv.alipay.com/vis/doc/design/rule/assist/referLine.html',
'https://antv.alipay.com/vis/doc/design/rule/assist/valueDisplayed.html',
'https://antv.alipay.com/vis/doc/design/rule/base/axis.html',
'https://antv.alipay.com/vis/doc/design/rule/base/grid.html',
'https://antv.alipay.com/vis/doc/design/rule/base/legend.html',
'https://antv.alipay.com/vis/doc/design/rule/base/title.html',
'https://antv.alipay.com/vis/doc/design/rule/base/tooltip.html',
'https://antv.alipay.com/vis/doc/design/rule/func/liveUpdate.html',
'https://antv.alipay.com/vis/doc/design/rule/func/rangeSelect.html',
'https://antv.alipay.com/vis/doc/design/rule/func/responsive.html',
'https://antv.alipay.com/vis/doc/reference.html'
];


// Word replace

var tipuesearch_replace = {'words': [
     {'word': 'tipua', 'replace_with': 'tipue'},
     {'word': 'javscript', 'replace_with': 'javascript'},
     {'word': 'jqeury', 'replace_with': 'jquery'}
]};


// Weighting

var tipuesearch_weight = {'weight': [
     {'url': 'http://www.tipue.com', 'score': 200},
     {'url': 'http://www.tipue.com/search', 'score': 100},
     {'url': 'http://www.tipue.com/about', 'score': 100}
]};


// Stemming

var tipuesearch_stem = {'words': [
     {'word': 'e-mail', 'stem': 'email'},
     {'word': 'javascript', 'stem': 'jquery'},
     {'word': 'javascript', 'stem': 'js'}
]};


// Internal strings

var tipuesearch_string_1 = 'No title';
var tipuesearch_string_2 = 'Showing results for';
var tipuesearch_string_3 = 'Search instead for';
var tipuesearch_string_4 = '1 result';
var tipuesearch_string_5 = 'results';
var tipuesearch_string_6 = 'Prev';
var tipuesearch_string_7 = 'Next';
var tipuesearch_string_8 = 'Nothing found';
var tipuesearch_string_9 = 'Common words are largely ignored';
var tipuesearch_string_10 = 'Search too short';
var tipuesearch_string_11 = 'Should be one character or more';
var tipuesearch_string_12 = 'Should be';
var tipuesearch_string_13 = 'characters or more';
