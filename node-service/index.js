const express = require("express");
const app = express();
// var whitelist = ['https://www.coco727.com', 'http://127.0.0.1:8727']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
app.use(
  require("cors")({
    credentials: true,
    // origin:true  // 本地运行放开， 线上务必注释此行
  })
);
app.use(express.json());
app.use("/", express.static(__dirname + "/admin"));
app.use("/lowCode", express.static(__dirname + "/lowcode"));
app.use("/uploads", express.static(__dirname + "/uploads"));

require("./pluglins/mongoose")(app);
require("./routers/admin/index")(app);
// require("./routers/web/index")(app);

app.listen(3000, () => console.log("http://localhost:3000"));
