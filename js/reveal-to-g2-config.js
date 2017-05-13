/* global d3 */

var pt = pt || {};

pt.slideIdToFunctions = {
  'customized': {
    'init': function() {
      pt.customized.init();
    }
  },
  'polar-coordinate': {
    'init': function() {
      pt.polarCood.init();
    }
  },
  'color-gradient': {
    'init': function() {
      pt.colorGradient.init();
    }
  },
  'g2-start': {
    'init': function() {
      pt.radar.init();
    }
  },
  'g2-start-to-polar': {
    'init': function() {
      pt.radarToPolar.init();
    }
  },
  'china-map': {
    'init': function() {
      pt.chinaMap.init();
    }
  },
  'linkage': {
    'init': function() {
      pt.linkage.init();
    }
  },
  'arcDiagram': {
    'init': function() {
      pt.arcDiagram.init();
    }
  },
  'sankey': {
    'init': function() {
      pt.sankey.init();
    }
  },
  'point-stack': {
    'init': function() {
      pt.pointStack.init();
    }
  },
  'langInfluence': {
    'init': function() {
      pt.langInfluence.init();
    }
  },
  'force': {
    'init': function() {
      pt.g6Force.init();
    }
  },
  'systemNet': {
    'init': function() {
      pt.g6SystemNet.init();
    }
  },
  'flow': {
    'init': function() {
      pt.g6RiverFlow.init();
      pt.g6Flow.init();
    }
  },
  'gm-charts': {
    'init': function() {
      pt.gmStackedArea.init();
      pt.gmArea.init();
      pt.lineDash.init();
      pt.lineSmooth.init();
      pt.gmRadar.init();
      pt.gmKChart.init();
      pt.gmStackedBar.init();
      pt.gmBar.init();
      pt.gmDoubleY.init();
      pt.gmDashboard.init();
      pt.gmNested.init();
      pt.gmDonut.init();
      pt.gmPie.init();
    }
  }
};

// function removeSVGs() {

//   //Remove (heavy) all existing svgs currently running
//   d3.select('#title-slide #titleSlide svg').remove();

//   d3.select('#intro-gradient #introGradient svg').remove();
//   d3.select('#traffic-accidents #trafficAccidents svg').remove();
//   d3.select("#legend-code-orientation #legendCodeOrientation svg").remove();
//   d3.select('#legend-code-two #legendCodeTwo svg').remove();
//   d3.select('#legend-code-multi #legendCodeMulti svg').remove();
//   d3.select('#smooth-legend-SOM #SOMchart svg').remove();
//   d3.select('#weather-radial #weatherRadial svg').remove();

//   d3.select("#intro-planets #introPlanets svg").remove();
//   d3.select("#planets-code #planetsCode svg").remove();
//   d3.select("#stars-hr-diagram #starsHRDiagram svg").remove();

//   d3.select('#intro-orientation #introOrientation svg').remove();
//   d3.select('#orientation-grey #orientationGrey svg').remove();
//   d3.select('#orientation-color-hex #orientationColorHex svg').remove();
//   d3.select('#orientation-final #orientationFinal svg').remove();

//   d3.select('#intro-slider #sliderIntro svg').remove();
//   d3.selectAll('#baby-names-final svg').remove();
//   d3.select('#slider-move-code #sliderMoveCode svg').remove();
//   d3.select('#growth-bmi #growthBMI svg').remove();

//   d3.select('#intro-animated-gradient #animatedGradientIntro svg').remove();
//   d3.select('#sankey-example #sankey svg').remove();
//   d3.select('#stretched-chord #stretchedChord svg').remove();
//   d3.select('#stretched-chord-final #stretchedChordFinal svg').remove();
//   d3.select("#minard #svgMinard defs").remove();

//   d3.select("#intro-gooey #introGooey svg").remove();
//   d3.select('#gooey-golf #gooeyGolf svg').remove();
//   d3.select('#gooey-code #gooeyCode svg').remove();
//   d3.select('#biggest-cities #biggestCities svg').remove();
//   d3.select('#collision-detection #collisionDetection svg').remove();

//   d3.select("#intro-glow #glowIntro svg").remove();
//   d3.select('#radar-chart #radarChart svg').remove();
//   d3.select("#glow-code #glowCode svg").remove();
//   d3.select('#spiro-graph #spiroGraph svg').remove();

//   d3.select('#intro-fuzzy #introFuzzy svg').remove();
//   pt.fuzzyIntro.stopRepeat = true;
//   d3.select('#fuzzy-code #fuzzyCode svg').remove();
//   d3.select('#animal-speeds #animalSpeeds svg').remove();

//   d3.select("#intro-colorAdd #introColorAdd svg").remove();
//   d3.select('#colorAdd-blend-modes #colorAddBlendModes svg').remove();
//   d3.select('#colorAdd-code #colorAddCode svg').remove();
//   clearInterval(pt.colorAddCode.infinityLoop);

//   d3.select('#end-slide #endSlide svg').remove();

// }
