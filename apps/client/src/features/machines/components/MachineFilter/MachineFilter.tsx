import styles from './MachineFilter.module.css';


interface Props {

  category:string;

  setCategory:(value:string)=>void;


  ram:string;

  setRam:(value:string)=>void;


  cpu:string;

  setCpu:(value:string)=>void;


  price:string;

  setPrice:(value:string)=>void;

}



export function MachineFilter({

  category,

  setCategory,

  ram,

  setRam,

  cpu,

  setCpu,

  price,

  setPrice,

}:Props){


return (

<div className={styles.filter}>


  <div className={styles.group}>

    <label>
      Loại máy
    </label>


    <select

      value={category}

      onChange={(e)=>
        setCategory(e.target.value)
      }

    >

      <option value="all">
        Tất cả
      </option>


      <option value="Máy chủ vật lý">
        Máy chủ vật lý
      </option>


    </select>


  </div>





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
      Giá 7 ngày
    </label>


    <select

      value={price}

      onChange={(e)=>
        setPrice(e.target.value)
      }

    >


      <option value="all">
        Tất cả
      </option>


      <option value="low">
        Dưới 500.000đ
      </option>


      <option value="high">
        Trên 500.000đ
      </option>


    </select>


  </div>



</div>

);


}