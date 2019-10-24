'use strict';

const HTML = `
<!doctype html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta
    name="viewport"
    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
  >
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.css">
  <title>Markdown</title>
  <style type="text/css">
    body {
      margin: 0 auto;
      max-width: 784px;
      padding: 8px;
    }
  </style>
</head>
<body>
  <div class="markdown-body">
    <div id="content"></div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <script type="text/javascript">
    const ws = new WebSocket(location.protocol.replace('http', 'ws') + '//' + location.host + '/ws');
    ws.addEventListener('open', (event) => {
      console.log('WebSocket opened:', event);
    });
    ws.addEventListener('message', (event) => {
      console.log('WebSocket received:', event);
      const content = document.getElementById('content');
      if (content != null) {
        content.innerHTML = marked(event.data);
      }
    });
  </script>
</body>
</html>
`;

module.exports.MarkdownHandler = (_req, res, next) => {
  res.send(HTML);
  // next();
};