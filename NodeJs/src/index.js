require('./db.js');
const app = require('./servidor');

app.listen(app.get('puerto'), () => console.log('Servidor funcionando en el puerto:'+app.get('puerto')));
