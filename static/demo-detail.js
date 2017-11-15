$(function() {

  var editorTheme;
  // 代码编辑器
  var codeEditor = {
    flag: true,
    init: function() {
      var self = this;
      editorTheme = CodeMirror.fromTextArea(document.getElementById('code'), {
        mode: 'text/html',
        lineNumbers: true,
        smartIndent: true
      });

      self.autoFormat([editorTheme]);
      editorTheme.on('focus', function() {
        $('.CodeMirror').css('background', '#f4f4f4');
      });
      editorTheme.on('blur', function() {
        $('.CodeMirror').css('background', '#F5F5F9');
      });
      var cmThemeA = $('.CodeMirror')[0].CodeMirror;

      self.updatePreview(editorTheme);

      $('#J_runCode').click(function() {
        self.updatePreview(editorTheme);
      });
    },
    updatePreview: function(editor) {
      var previewFrame = document.getElementById('preview');
      var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
      preview.open();
      preview.write(editor.getValue());
      preview.close();
    },
    autoFormat: function(editors) {
      editors.forEach(function(editor) {
        var totalLines = editor.lineCount();
        var totalChars = editor.getTextArea().value.length;
        editor.autoFormatRange({line:0, ch:0}, {line:totalLines, ch:totalChars});
      });
    }
  };

  codeEditor.init();

  // 代码复制至剪切板
  var clipboard = {
    init: function() {
      var self = this;
      var copyBtn = $('#J_copyCode');
      var clipboard = new Clipboard(copyBtn[0], {
        text: function() {
          var tabLables = $('.tab-label');
          if ($(tabLables[0]).hasClass('actived')) {
            return $('#code').text();
          } else {
            return $('#reactCode').text();
          }
        }
      });

      clipboard.on('success', function(e) {
        e.clearSelection();
        self.showTooltip('复制成功!');
      });

      clipboard.on('error', function(e) {
        e.clearSelection();
        self.showTooltip('复制失败!');
      });
    },
    showTooltip: function(msg) {
      $('#J_copyStatus').text(msg).fadeIn(500).fadeOut(500);
    }
  };

  clipboard.init();

  var isDown = false;
  $('div#widthHandler').mousedown(function() {
    isDown = true;
  });
  $(window).mousemove(function(e) {
    if (isDown) {
      if (e.clientX <= 453 || (window.innerWidth - e.clientX) <= 245) {
        isDown = false;
        return false;
      }
      var left = (e.clientX - 208) / window.innerWidth;
      left = Math.min(0.9, Math.max(0.1, left)) * 100;

      $('.code-banner').css('width', left + '%');
      $('.code-panel').css('width', left + '%');
      $('.chart-panel').css('left', left + '%')
      $('#widthHandler').css('left', left + '%');
    }
  }).mouseup(function() {
    isDown = false;
  });


  var code = $('#code').val();
  var reactCode = $('#reactCode').val();
  $('.tab-label').click(function(ev) {
    var target = $(this);
    if (target.hasClass('actived')) {
      return;
    } else {
      target.addClass('actived').siblings().removeClass('actived');

      if (target.attr('id') === 'J_G2React') {
        editorTheme.setValue(reactCode);
      } else {
        editorTheme.setValue(code);
      }
      codeEditor.autoFormat([editorTheme]);
      codeEditor.updatePreview(editorTheme);
    }
  });
});
