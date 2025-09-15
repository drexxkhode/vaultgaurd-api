const corsMiddleware = require("cors");

const cors = corsMiddleware({
origin: "http://localhost:3000",
credentials: true
});
module.exports= cors;