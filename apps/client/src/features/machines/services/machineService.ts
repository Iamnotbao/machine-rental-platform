import { machines } from "../data/machine.mock";

import type { Machine } from "../types";


export const machineService = {


 async getMachines():Promise<Machine[]> {

   return machines;

 },


 async getMachineById(
  id:string
 ):Promise<Machine | undefined>{

   return machines.find(
    item=>item.id===id
   );

 }

};