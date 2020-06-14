module.exports = (req, res, next) => {
  console.log('auth function');
  next();
};