class AuthService {
  constructor(){
    console.log('Hello');
    this.attemptLogin = this.attemptLogin.bind(this);
  }
  
  attemptLogin(){
    return new Promise ((resolve, reject) => {
      resolve({data:{email:'email@gmail.com', name:'Wilson Manzano', phoneNumber:'300131451', id:20}});
    });
  }
}
const authService = new AuthService();
export {authService};