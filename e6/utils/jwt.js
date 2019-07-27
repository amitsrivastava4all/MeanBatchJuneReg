const jwt = require('jsonwebtoken');
const jwtOperations = {
    SECRETKEY:'UCANTSEEME',
    generateToken(userid){
        var token = jwt.sign({userid }, this.SECRETKEY,{ expiresIn: '1h' });
        return token;
    },
    verifyToken(clientTokenNumber){
        var decoded = jwt.verify(clientTokenNumber, this.SECRETKEY);
        if(decoded){
        console.log('Verified ',decoded.userid);
        return decoded.userid;
        }
        else{
            console.log('Token Not Matched...');
            return undefined;
        }
    }
}
module.exports = jwtOperations;