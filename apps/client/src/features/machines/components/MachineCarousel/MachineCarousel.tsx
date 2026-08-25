import { useEffect, useRef, useState } from 'react';

import { MachineCard } from '../MachineCard/MachineCard';

import type { Machine } from '../../types';

import styles from './MachineCarousel.module.css';


interface Props {
  machines: Machine[];
}


const ITEMS_PER_PAGE = 3;



export function MachineCarousel({
  machines,
}: Props) {


  const containerRef = useRef<HTMLDivElement>(null);


  const [activePage, setActivePage] = useState(0);

  const [pause, setPause] = useState(false);



  const totalPages = Math.ceil(
    machines.length / ITEMS_PER_PAGE
  );



  const scrollToPage = (
    page:number
  ) => {


    if(!containerRef.current)
      return;



    containerRef.current.scrollTo({

      left:
        page *
        containerRef.current.clientWidth,


      behavior:'smooth'

    });



    setActivePage(page);

  };



  const moveCarousel = (
    direction:'left'|'right'
  )=>{


    let nextPage = activePage;



    if(direction === 'right'){


      nextPage =
        activePage + 1 >= totalPages

        ?

        0

        :

        activePage + 1;


    }
    else {


      nextPage =
        activePage - 1 < 0

        ?

        totalPages - 1

        :

        activePage - 1;


    }



    scrollToPage(nextPage);


  };





  useEffect(()=>{


    if(
      pause ||
      totalPages <= 1
    )
      return;



    const timer =
      setInterval(()=>{


        setActivePage(prev=>{


          const next =
            prev + 1 >= totalPages
            ?
            0
            :
            prev + 1;



          if(containerRef.current){

            containerRef.current.scrollTo({

              left:
                next *
                containerRef.current.clientWidth,

              behavior:'smooth'

            });

          }



          return next;


        });



      },3000);



    return ()=>clearInterval(timer);



  },[
    pause,
    totalPages
  ]);






  const handleScroll = ()=>{


    if(!containerRef.current)
      return;



    const page =
      Math.round(

        containerRef.current.scrollLeft /

        containerRef.current.clientWidth

      );



    setActivePage(page);


  };






  if(!machines.length){

    return (

      <div className={styles.empty}>

        Không có máy phù hợp

      </div>

    );

  }






  return (

    <div

      className={styles.carousel}

      onMouseEnter={() =>
        setPause(true)
      }

      onMouseLeave={() =>
        setPause(false)
      }

    >



      <div className={styles.content}>


        <button

          className={styles.arrow}

          onClick={() =>
            moveCarousel('left')
          }

        >

          ‹

        </button>




        <div

          ref={containerRef}

          className={styles.container}

          onScroll={handleScroll}

        >


          {
            machines.map(machine=>(


              <div

                className={styles.item}

                key={machine.id}

              >

                <MachineCard

                  machine={machine}

                />

              </div>


            ))
          }


        </div>





        <button

          className={styles.arrow}

          onClick={() =>
            moveCarousel('right')
          }

        >

          ›

        </button>


      </div>





      <div className={styles.pagination}>


        {
          Array.from({
            length: totalPages
          }).map((_,index)=>(


            <button

              key={index}


              className={

                index === activePage

                ?

                styles.activePage

                :

                ''

              }


              onClick={() =>
                scrollToPage(index)
              }

            >

              {index + 1}


            </button>


          ))
        }


      </div>



    </div>

  );

}