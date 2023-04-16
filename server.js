const app = require('./app');

console.log(app.get('env'));

// Creating a Server
app.listen(3000, () => console.log("Server has been started on PORT:3000"));