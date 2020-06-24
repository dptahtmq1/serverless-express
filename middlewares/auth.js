async function authenticate(req, res, next) {
  const token = req.headers['authorization'] || req.headers['Authorization'] || '';

  try {
    await verify(token);
  } catch (e) {
    console.error('authentication error: ', e.message);
    return res.status(401).send(e.message);
  }

  next();
}

function verify(token) {
  if (token === 'valid') {
    return true;
  } else {
    throw new Error('invalid token');
  }
}

module.exports = {
  authenticate
};
