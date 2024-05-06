const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV == "development") {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
      stack: err.stack,
      err,
    });
  }

  if (process.env.NODE_ENV == "production") {
    let message = err.message;
    let error = new ErrorHandler(message);

    if (err.name == "ValidationError") {
      message = Object.values(err.errors).map((x) => x.message);
      error = new ErrorHandler(message);
      err.statusCode = 400
    }

    if (err.name == "CastError") {
      message = `Resoures not found: ${err.path}`;
      error = new ErrorHandler(message);
      err.statusCode = 400
    }

    if (err.name == "JSONWebTokenError") {
      message = `JSON Web Token is invalid. Try again`;
      error = new ErrorHandler(message);
      err.statusCode = 400
    }

    if (err.name == "TokenExpiredError") {
      message = `JSON Web Token is Expired. Try again`;
      error = new ErrorHandler(message);
      err.statusCode = 400
    }

    if (err.code == 11000) {
      let message = `Duplicate ${Object.keys(err.keyValue)} error`
      error = new ErrorHandler(message);
      err.statusCode = 400

    }

    res.status(err.statusCode).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
