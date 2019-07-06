var controller = require('./controller.js');
module.exports = function(app){
    app.get('/test/:hashtags',controller.test)
}