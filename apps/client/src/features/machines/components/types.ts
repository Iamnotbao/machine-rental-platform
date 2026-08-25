export interface MachineConfig {

  id:string;

  name:string;

  category:string;

  description:string;


  images:string[];


  specs:{

    cpu:string;

    ram:string;

    gpu:string;

    storage:string;

  };


  pricing:{

    test24h:number;

    week:number;

    month:number;

  };


  availableCount:number;

}




export interface MachineInstance {


  id:string;


  configId:string;


  name:string;


  status:
  | "available"
  | "rented";


  location:string;


}