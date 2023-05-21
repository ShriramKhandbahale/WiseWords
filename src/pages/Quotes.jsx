import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { StageSpinner } from "react-spinners-kit";
import { useState } from "react";

// components
import ShareBar from "@components/ShareBar";

// assets 
import ShareIcon from '@assets/share-icon.svg'

const Quotes = () => {
  const [quoteVisible, setQuoteVisible] = useState(true);
  const theme = localStorage.getItem('theme') || 'light';
  const [isHovered, setIsHovered] = useState(false);

  const handleQuoteChange = () => {
    setQuoteVisible(false);
    setTimeout(async () => {
      await refetch();
      setQuoteVisible(true);
    }, 1000);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const { data, refetch, isLoading } = useQuery(["quote"], async () => {
    return await Axios.get('https://api.quotable.io/random?maxLength=80').then(res => res.data);
  })

  // console.log(window.innerWidth);

  return (
    <div id="quote-page">
      <AnimatePresence>
        {quoteVisible &&
          <motion.div className="quote-container"
            initial={{ opacity: 0 }}
            key={data?.content}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {isLoading ? (theme == 'light' ? <StageSpinner color="#303030" /> : <StageSpinner />) : <>
              <div className="quote-container__quote">
                <h1>{data?.content}</h1>
              </div>
              <div className="quote-container__author">
                <span> - {data?.author}</span>
              </div>
            </>
            }
          </motion.div>
        }
      </AnimatePresence>

      <div className="generate-new-btn">
        <button onClick={handleQuoteChange}>Generate New</button>
      </div>

      <div className="share-quote" onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>

        <AnimatePresence>
          {isHovered &&
            <motion.div className="share-bar-container"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1, transformOrigin: window.innerWidth <= '600' ? 'center' : 'bottom right' }}
              transition={{ type: 'spring', damping: 20, stiffness: 200 }}
            >
              <ShareBar quote={data?.content} author={data?.author} />
            </motion.div>
          }
        </AnimatePresence>

        <div className="share-btn">
          <img src={ShareIcon} alt="share" style={{
            opacity: isHovered && 1
          }} />
        </div>

      </div>

    </div>
  )
}

export default Quotes;