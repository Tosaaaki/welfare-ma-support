// 環境変数を読み込む
require('dotenv').config();

const mongoose = require('mongoose');

// アプリの設定値をまとめる
const config = {
  port: process.env.PORT || 3000,
  dbUrl: process.env.MONGODB_URL || 'mongodb://db:27017/welfare'
};

// DBへ接続するヘルパー関数
const connectDB = async () => {
  try {
    await mongoose.connect(config.dbUrl);
    console.log('Database connected');
  } catch (err) {
    console.error('Database connection failed', err);
    process.exit(1);
  }
};

module.exports = { config, connectDB };
