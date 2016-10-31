import path from 'path';
import express from 'express';

const bundlePath = path.join(__dirname, './dist/index.html');
const app = express();
  
app.use(express.static(__dirname + './dist'));
app.get('*', function(req, res) {
  res.sendFile(bundlePath);
});

app.listen(port, '0.0.0.0', function(err) {
  if (err) console.log(err);
  
  console.info(`Server listening on port ${port}`);
})