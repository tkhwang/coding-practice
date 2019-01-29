const qs = require('querystring');
const http = require('http');

const post_data = qs.stringify({
  key1: 'val1',
  key2: 'val2',
});

const post_options = {
  host: 'tkhwang.github.io',
  port: '80',
  path: '/post.php',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': post_data.length,
  },
};

const post_req = http.request(post_options, (res) => {
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`Response: ${chunk}`);
  });
});

post_req.write(post_data);
post_req.end();
