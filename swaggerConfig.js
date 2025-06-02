const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'crc_api',
    description: 'API documentation for CRC',
  },
  host: 'localhost:5000',
  schemes: ['http'],
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/Routes/*.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);