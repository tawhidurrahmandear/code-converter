// Code Converter
// CSS and HTML to JavaScript Converter, HTML to PHP Converter, HTML to ASP Converter
// developed by Tawhidur Rahman Dear, https://www.tawhidurrahmandear.com
// Live Preview available at https://www.devilhunter.net/p/code-converter.html


    function convertToJavaScript() {
      const Code = document.getElementById('Code').value.split('\n');
      let result = '<script type="text/javascript">\n';
      result += '// Generated JavaScript Code\n';
      Code.forEach(line => {
        result += 'document.writeln("' + line.replace(/"/g, '\\"') + '");\n';
      });
      result += '<\/script>';
      document.getElementById('Code').value = result;
    }

    function convertToPHP() {
      const Code = document.getElementById('Code').value.split('\n');
      let result = "<?php\n";
      Code.forEach(line => {
        result += 'echo "' + line.replace(/"/g, '\\"') + '\\n";\n';
      });
      result += "?>";
      document.getElementById('Code').value = result;
    }

    function convertToASP() {
      const Code = document.getElementById('Code').value.split('\n');
      let result = '#!/usr/bin/perl\nprint "Content-type: text/html\\n\\n";\n';
      Code.forEach((line, index) => {
        result += `$code[${index}] = "${line.replace(/"/g, '\\"')}";\n`;
      });
      result += 'for ($i = 0; $i < scalar(@code); $i++) { print($code[$i] . "\\n"); }';
      document.getElementById('Code').value = result;
    }

function copyToClipboard() {
  const Code = document.getElementById('Code');
  const copyButton = document.getElementById('copy'); 
  Code.select();
  document.execCommand('copy');
  copyButton.classList.add("success");
  copyButton.textContent = "Successfully Copied";
  setTimeout(() => {
    copyButton.classList.remove("success");
    copyButton.textContent = "Copy again!";
  }, 2000);
}