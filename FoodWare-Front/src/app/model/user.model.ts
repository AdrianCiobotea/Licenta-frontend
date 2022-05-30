export class User{

    public id: number;
    public phoneNumber : string;
    public password: string;
    public role : string;
    public statusCd: string;
    public statusMsg : string;
    public authStatus : string;
  
  
    constructor(id?: number, phoneNumber?: string,  password?: string,role?: string,
        statusCd?:string,statusMsg?:string, authStatus?:string){
          this.id = id!;
          this.phoneNumber = phoneNumber!;
          this.password = password!;
          this.role = role!;
          this.statusCd = statusCd!;
          this.statusMsg = statusMsg!;
          this.authStatus = authStatus!;
    }
  
  }
  