import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.cookie('jwt', token, {
    maxAge: 30 * 24 * 60 * 60 * 1000 /* ms */,
    httpOnly: true /* prevents xss attacks */,
    sameSite: 'strict',
    secure:
      process.env.NODE_ENV !== 'development' /* cookie works only in https */,
  });
};

export default generateTokenAndSetCookie;
