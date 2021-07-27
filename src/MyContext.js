import { createContext, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      image:
        "https://pngpress.com/wp-content/uploads/2020/04/HTML-logo-300x300.png",
    },
    {
      id: 2,
      image:
        "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/042015/css3.png?itok=OlYIVwA0",
    },
    {
      id: 3,
      image:
        "https://www.ocpsoft.org/wp-content/uploads/2013/01/javascript_logo_unofficial-300x300.png",
    },
    {
      id: 4,
      image:
        "https://www.pine64.org/wp-content/uploads/2019/04/github-logo.jpg",
    },
    {
      id: 5,
      image:
        "https://proyectosbeta.net/wp-content/uploads/2016/10/Logo-StackOverFlow.png",
    },
    {
      id: 6,
      image:
        "https://www.deepnetsecurity.com/wp-content/uploads/2014/03/linux-logo.jpg",
    },
    {
      id: 11,
      image:
        "https://pngpress.com/wp-content/uploads/2020/04/HTML-logo-300x300.png",
    },
    {
      id: 12,
      image:
        "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/042015/css3.png?itok=OlYIVwA0",
    },
    {
      id: 13,
      image:
        "https://www.ocpsoft.org/wp-content/uploads/2013/01/javascript_logo_unofficial-300x300.png",
    },
    {
      id: 14,
      image:
        "https://www.pine64.org/wp-content/uploads/2019/04/github-logo.jpg",
    },
    {
      id: 15,
      image:
        "https://proyectosbeta.net/wp-content/uploads/2016/10/Logo-StackOverFlow.png",
    },
    {
      id: 16,
      image:
        "https://www.deepnetsecurity.com/wp-content/uploads/2014/03/linux-logo.jpg",
    },
  ]);

  let myShuffle = cards;
  
  const [openCards, setOpenCards] = useState([]);
//   const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);

//   // const timeout = useRef(null);



  const values = {
      cards,
      setCards,
      openCards,
      setOpenCards,
      moves,
      setMoves
  };
  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};
export default MyContext;
