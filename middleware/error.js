const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (error, req, res, next) => {
  let err = {
    ...error,
  };

  err.message = error.message
  console.log(error);

  // Invalid object id
  if (error.name === "CastError") {
    const message = "Resource not found";
    err = new ErrorResponse(message, 404);
  }

  // duplicate key error
  if (error.code === 11000) {
    const message = "Duplicate field value entered";
    error = new ErrorResponse(message, 400);
  }

  if (error.name === "ValidationError") {
    const message = Object.values(error.errors).map((e) => {
      return {
        field: e.path,
        message: e.message,
      };
    });

    err = new ErrorResponse(null, 400, message)
  }

  res
    .status(err.statusCode)
    .json({ success: false, error: err.messageWithField || err.msg || "Server Error" });
};

module.exports = errorHandler;
