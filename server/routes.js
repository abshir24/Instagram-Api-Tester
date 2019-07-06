var controller = require('./controller.js');
module.exports = function(app){
    app.get('/test/:id',controller.test)
}