const app = require("./app");
const dotenv = require("dotenv");
const path = require("path");
const connectDatabase = require("./config/database");

dotenv.config({ path: path.join(__dirname, "config", ".env") });

connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `this server running on port ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server dut to unhandled rejection`);
  server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server dut to uncaught exception`);
  server.close(() => {
    process.exit(1);
  });
});
