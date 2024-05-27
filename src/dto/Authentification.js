export default class Authentification {
    constructor(data){
        this.data = data;
    }

    jwt(){
        return this.data.auth.accessToken
    }
}