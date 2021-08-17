export class User{

    id:number;
    username:string;
    password:string;
    lastName:string;
    firstName:string;
    email:string;
    phone:string;
    reviewer:boolean;
    admin:boolean;
    name:string;

    constructor(id:number =0, username: string ='', password: string ='', lastName:string ='', 
    firstName:string ='',email:string ='', phone:string ='', reviewer:boolean =false, 
    admin:boolean = false, name:string = ''){
        this.id=id;
        this.username=username;
        this.password=password;
        this.lastName=lastName;
        this.firstName=firstName;
        this.email=email;
        this.phone=phone;
        this.reviewer=reviewer;
        this.admin=admin;
        this.name=name;
    }
}