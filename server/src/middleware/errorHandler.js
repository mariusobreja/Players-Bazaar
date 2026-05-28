const errorHandler = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message =
    error.message || 'Unexpected server error. Please try again later.';

  if (statusCode >= 500) {
    console.error('Server error:', error);
  }

  res.status(statusCode).json({
    success: false,
    message
  });
};

module.exports = errorHandler;
