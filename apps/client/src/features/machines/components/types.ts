export interface Machine {

  id: string;

  name: string;

  category: string;

  description: string;


  images: string[];


  status:
    | "available"
    | "rented";


  specs: {

    cpu: string;

    ram: string;

    gpu: string;

    storage: string;

  };


  pricing: {

    test24h: number;

    week: number;

    month: number;

  };

}