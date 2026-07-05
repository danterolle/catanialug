(function() {
  var outputEl = document.getElementById('terminal-output');
  if (!outputEl) return;

  var cmds = [
    { cmd: 'whoami', out: 'GNU/Linux User Group Catania' },
    { cmd: 'cat missione.txt', out: 'Diffondere la cultura del software libero\ne dell\'open source, tra scuole, universit&agrave;\ne territorio.' },
    { cmd: 'uptime', out: '25 anni di passione per il software libero' },
    { cmd: './iscriviti.sh', out: 'Benvenut* nella community!' }
  ];

  var promptHTML = '<span class="prompt">glugct@catania</span>:<span class="path">~</span>$ ';
  var cmdIdx = 0;
  var charIdx = 0;
  var typing = false;
  var done = false;
  var currentLine = null;

  function addPromptLine() {
    var line = document.createElement('div');
    line.className = 'input-line';
    line.innerHTML = promptHTML + '<span class="cmd-typed"></span><span class="cursor"></span>';
    outputEl.appendChild(line);
    return line;
  }

  function typeCmd() {
    if (cmdIdx >= cmds.length) {
      document.querySelectorAll('.cursor').forEach(function(c) { c.remove(); });
      done = true;
      return;
    }
    currentLine = addPromptLine();
    var cmd = cmds[cmdIdx].cmd;
    var span = currentLine.querySelector('.cmd-typed');
    typing = true;
    charIdx = 0;

    function typeChar() {
      if (charIdx < cmd.length) {
        span.textContent += cmd[charIdx];
        charIdx++;
        setTimeout(typeChar, 30 + Math.random() * 30);
      } else {
        typing = false;
        if (currentLine) {
          var cur = currentLine.querySelector('.cursor');
          if (cur) {
            cur.style.background = 'var(--accent)';
            cur.style.animation = 'none';
          }
        }
        setTimeout(showOutput, 400);
      }
    }
    typeChar();
  }

  function showOutput() {
    if (currentLine) {
      var cur = currentLine.querySelector('.cursor');
      if (cur) cur.remove();
    }
    var cmd = cmds[cmdIdx];
    var outLines = cmd.out.split('\n');
    outLines.forEach(function(l) {
      var d = document.createElement('div');
      d.className = 'cmd-line output';
      d.innerHTML = l;
      outputEl.appendChild(d);
    });
    cmdIdx++;
    outputEl.scrollTop = outputEl.scrollHeight;
    setTimeout(typeCmd, 500);
  }

  setTimeout(typeCmd, 800);
})();
