import styles from './MachineFilter.module.css';


interface Props {


  ram:string;

  setRam:(value:string)=>void;


  cpu:string;

  setCpu:(value:string)=>void;


  priceSort:string;

  setPriceSort:(value:string)=>void;


}



export function MachineFilter({

  ram,

  setRam,

  cpu,

  setCpu,

  priceSort,

  setPriceSort,

}:Props){



return (

<div className={styles.filter}>


<div className={styles.group}>


<label>

RAM

</label>



<select

value={ram}

onChange={(e)=>
setRam(e.target.value)
}

>


<option value="all">

Tất cả

</option>



<option value="64GB">

64GB

</option>



<option value="128GB">

128GB

</option>



</select>


</div>






<div className={styles.group}>


<label>

CPU

</label>



<select

value={cpu}

onChange={(e)=>
setCpu(e.target.value)
}

>


<option value="all">

Tất cả

</option>



<option value="12 Core 24 Thread">

12 Core 24 Thread

</option>



<option value="28 Core 56 Thread">

28 Core 56 Thread

</option>



<option value="36 Core 72 Thread">

36 Core 72 Thread

</option>



</select>


</div>






<div className={styles.group}>


<label>

Sắp xếp giá

</label>



<select

value={priceSort}

onChange={(e)=>
setPriceSort(e.target.value)
}

>


<option value="default">

Mặc định

</option>



<option value="asc">

Giá thấp → cao

</option>



<option value="desc">

Giá cao → thấp

</option>



</select>


</div>



</div>


);


}