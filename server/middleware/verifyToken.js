import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  //   console.log(req.headers.cookie);
  const token = req.cookies.token;
  console.log(token);
  if (!token) {
    return res.status(401).json({
      authenticated: false,
      message: 'No token found',
    });
  }

  const decoded = jwt.verify(token, 'hello_this_string');
  req.user = decoded;
  next();
};

export default verifyToken;

//parse cookie-parser
