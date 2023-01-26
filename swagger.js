const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
<<<<<<< HEAD
    description: 'Contacts API',
=======
    description: 'Temple API',
>>>>>>> bf6615d85ea8754886335d60ba9d5478117b5340
  },
  host: 'localhost:8080',
  schemes: ['http'],
};

const outputFile = './swagger.json';
<<<<<<< HEAD
const endpointsFiles = ['./src/routes/index.js'];
=======
const endpointsFiles = ['./routes/index.js'];
>>>>>>> bf6615d85ea8754886335d60ba9d5478117b5340

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);