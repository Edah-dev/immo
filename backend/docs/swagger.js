const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        version: '1.0.0',
        title: 'Immo API',
        description: 'Documentation for the real estate management API',
    },
    host: 'localhost:3000',
    securityDefinitions: {
        Bearer: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header',
        },
    },
    definitions: {
        User: {
            email: 'menraromial@gmail.com',
            password: 'password',
            firstName: 'Oumaima',
            lastName: 'Menrari',
            phone: '0612345678',
            role: 'admin',
            createdAt: '2021-07-21T17:32:51.566Z',
            updatedAt: '2021-07-21T17:32:51.566Z',

        },
        Listing: {
            title: 'Villa à louer',
            description: 'Villa de luxe à louer',
            price: 500000,
            surface: 300,
            location: 'Rabat',
            type: 'maison',
            userId: '60f7b4b3f9b5b51c5c8e8e4d',
            images: ['url1', 'url2'],
            videos: ['url1', 'url2'],
            amenities: {
                wifi: true,
                kitchen: true,
                bathroom: true,
                balcony: true,
                electricityIncluded: true,
                airConditioner: true,
                allChargesIncluded: true,
                parking: true,
                elevator: true,
                securityGuard: true,
                swimmingPool: true,
                garden: true,
                terrace: true,
                heating: true,
                furnished: true,
                petsAllowed: true,
            },
            createdAt: '2021-07-21T17:32:51.566Z',
            updatedAt: '2021-07-21T17:32:51.566Z',
        },
    },

};

const outputFile = './docs/swagger.json';
const routes = ['./app.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);