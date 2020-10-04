const express = require('express');
const app = express();

const PORT = process.env.PORT ?? 3000;
const ROOT = __dirname + '/public';

app.use(express.static(ROOT));

app.get('/api/records', (req, res) => {
  res.json(mockup());
});

app.get('/', (req, res) => {
  res.redirect('/profile');
});

app.get('*', (req, res) => {
  res.sendFile(ROOT + '/index.html');
});

app.listen(PORT, () => console.log(`Profile available at http://localhost:${PORT}/profile`));

function mockup(){
  let res = [];
  for(let i = 0; i < 20; i++){
    res.push({
      doctor: {
        img: 'https://www.kalashnikov.ru/wp-content/uploads/2020/07/placeholder.png',
        name: 'Test T.',
        prof: 'Tester',
      },
      org: `Test №${i}`,
      date: new Date(Date.now()).toLocaleString()
    });
  }
  return res;
}