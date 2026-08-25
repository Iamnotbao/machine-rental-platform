import styles from "./MachineGallery.module.css";


interface Props {

images:string[];

}


export function MachineGallery({
images
}:Props){


return (

<div className={styles.gallery}>


{
images.map(
(image,index)=>(

<img

key={index}

src={image}

alt="machine"

/>

))
}


</div>

)

}