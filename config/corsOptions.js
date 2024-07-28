const allowedOrigins = require('./allowedOrigins')

// const corsOptions = {
//     origin: (origin, callback) => {
//         if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     },
//     credentials: true,
//     optionsSuccessStatus: 200
// }

const corsOptions = require('cors');
app.use(corsOptions({
    origin: 'https://abc-school-system.onrender.com', // Allow only your frontend domain
    credentials: true // Enable this if you need to send cookies with requests
}));

module.exports = corsOptions 