module.exports = (app) => {
  const mongoose = require("mongoose");
  const MONGODB_URI =
    "mongodb+srv://mamba:mamba200306@cluster0.jhbu1cq.mongodb.net/vercelsien?retryWrites=true&w=majority";

  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  //   const db = mongoose.connection;

  // // 将连接绑定到错误事件
  // db.on('error', console.error.bind(console, 'MongoDB connection error'));

  // // 错误事件，同上
  // db.on('error', function(error) {
  //   console.error.bind(console, '数据库连接失败：' + error);
  // });

  // // 一次打开事件
  // db.once('open', function() {
  //     console.log('一次打开记录');
  // });

  // // 数据库连接成功
  // db.on('open', function() {
  //   console.log('数据库连接成功');
  // });

  // // 数据库连接失败
  // db.on('disconnected', function() {
  //   console.log('数据库连接断开');
  // });
};
