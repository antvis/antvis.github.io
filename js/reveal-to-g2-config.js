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
  // 'point-stack': {
  //   'init': function() {
  //     pt.pointStack.init();
  //   }
  // },
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

function destroyChart() {
  pt.arcDiagram.destroy();
  pt.customized.destroy();
  pt.polarCood.destroy();
  pt.colorGradient.destroy();
  pt.radar.destroy();
  pt.radarToPolar.destroy();
  pt.chinaMap.destroy();
  pt.linkage.destroy();
  pt.arcDiagram.destroy();
  pt.sankey.destroy();
  // pt.pointStack.destroy();
  pt.langInfluence.destroy();
  pt.g6Force.destroy();
  pt.g6RiverFlow.destroy();
  pt.g6Flow.destroy();
  pt.gmStackedArea.destroy();
  pt.gmArea.destroy();
  pt.lineDash.destroy();
  pt.lineSmooth.destroy();
  pt.gmRadar.destroy();
  pt.gmKChart.destroy();
  pt.gmStackedBar.destroy();
  pt.gmBar.destroy();
  pt.gmDoubleY.destroy();
  pt.gmDashboard.destroy();
  pt.gmNested.destroy();
  pt.gmDonut.destroy();
  pt.gmPie.destroy();
}
