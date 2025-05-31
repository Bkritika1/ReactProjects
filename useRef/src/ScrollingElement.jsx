import { useRef } from "react";

export default function CatFriends() {
    const firstCatRef = useRef(null);
    const secondCatRef = useRef(null);
    const thirdCatRef = useRef(null);




    function  handleScrollToFirstCat(){
        firstCatRef.current.scrollIntoView({
            behaviour: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }


    function handleScrollSecondCat(){
        secondCatRef.current.scrollIntoView({
            behaviour: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    function handleScrollThirdCat(){
        thirdCatRef.current.scrollIntoView({
            behaviour: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }

    return(
        <>
        <nav>
            <button onClick={handleScrollToFirstCat}>
                Neo
            </button>
            <button onClick={handleScrollSecondCat}>
                Millie
            </button>
            <button onClick={handleScrollThirdCat}>
                Bella
            </button>
        </nav>
        <div>
            <ul>
                <li>
                      <img
              src="https://placecats.com/neo/300/200"
              alt="Neo"
              ref={firstCatRef}
            />
          </li>
          <li>
            <img
              src="https://placecats.com/millie/200/200"
              alt="Millie"
              ref={secondCatRef}
            />
          </li>
          <li>
            <img
              src="https://placecats.com/bella/199/200"
              alt="Bella"
              ref={thirdCatRef}
            />
                </li>
            </ul>
        </div>
        </>
    )
}