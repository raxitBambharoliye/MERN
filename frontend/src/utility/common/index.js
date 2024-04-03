import crypto from 'crypto-js'
import Cookies from 'js-cookies'
const secret = import.meta.env.VITE_SECRET;
const setToken = (token) => {
    const enToken = crypto.AES.encrypt(token, secret).toString();
    return Cookies.setItem('userToken', JSON.stringify(enToken));
}
const getToken = () => {
    const token = JSON.parse(Cookies.getItem('userToken'));
    if(!token){
        return false;
    }
    const enToken = crypto.AES.decrypt(token, secret).toString(crypto.enc.Utf8);
    return enToken;
}

const setUser = (user) => {
    console.log('user', user)
    const enUser = crypto.AES.encrypt(JSON.stringify(user), secret).toString();
    console.log('enUser', enUser)
    return Cookies.setItem("user", JSON.stringify(enUser))
}
const getUser = () => {
    const enUser = JSON.parse(Cookies.getItem("user"));
    if (!enUser) { return false; }
    
    const user = crypto.AES.decrypt(enUser, secret).toString(crypto.enc.Utf8);
    if (user) {
        return JSON.parse(user);
    }
    return false;
}
export { setToken, getToken, setUser, getUser };