export  class User{
  name: string = "";
  email: any;
  login: string = "";
  password: string ="";
  phonenumber: string ="";


  constructor(name: string, email: any, login: string, password: string, phonenumber: any) {
    this.name = name;
    this.email = email;
    this.login = login;
    this.password = password;
    this.phonenumber = phonenumber;
  }

}
