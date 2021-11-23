export  class User{
  id: string = "";
  name: string = "";
  email: any;
  login: string = "";
  password: string ="";
  phonenumber: string ="";
  isChecked: false;



  constructor(name: string, email: any, login: string, password: string, phonenumber: any,id:string) {
    this.name = name;
    this.email = email;
    this.login = login;
    this.password = password;
    this.phonenumber = phonenumber;
    this.id = id;
  }

}
