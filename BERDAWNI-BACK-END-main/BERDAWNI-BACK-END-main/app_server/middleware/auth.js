import jwt from "jsonwebtoken";

const secret = 'BERDAWNISECRETLOGEDINADMINS';

export const auth = async (req, res, next) => {
  if (req.headers && req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      //res.send(401);
      return res.status(401).send({ auth: false, message: 'No token provided' });
    }
    else {
      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          return res.send({ auth: false, message: 'Token authentication failed' });
        }
        else {
          req.userId = decoded.id;
          next();
        }
      }
      );
    }
  }
  else {
    //res.send(401);
    return res.status(401).send({ auth: false, message: 'No token provided' });
  }
}

export default auth;