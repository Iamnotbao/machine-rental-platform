import { useEffect,useState } from "react";

import { useParams } from "react-router-dom";


import { machineService } from "@/features/machines/services/machineService";


import type { Machine } from "@/features/machines/components/types";


import { MachineGallery } from "@/features/machines/components/MachineGallery/MachineGallery";

import { MachinePricing } from "@/features/machines/components/MachinePricingCard/MachinePricingCard";



export function MachineDetailPage(){


const {id}=useParams();


const [machine,setMachine]=useState<Machine>();



useEffect(()=>{

if(id){

machineService
.getMachineById(id)
.then(setMachine);

}

},[id]);



if(!machine)
return <p>Loading...</p>;



return (

<section>


<h1>
{machine.name}
</h1>


<MachineGallery

images={machine.images}

/>


<p>
{machine.description}
</p>


<MachinePricing

pricing={machine.pricing}

/>


<button>

Thuê ngay

</button>


</section>

)

}