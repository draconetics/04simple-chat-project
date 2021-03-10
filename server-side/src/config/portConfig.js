
// default development port
let PORT = 5000;

if (process.env.NODE_ENV === 'test') {
  PORT = 5001;
}
if (process.env.NODE_ENV === 'production') {
  PORT = process.env.PORT;
}

module.exports = { PORT };