const app = require('../app.js');

app.set('port', process.env.PORT || 8081);

app.listen(app.get('port'), () => {
    console.log(app.get('port'), 'port runing!!');
});