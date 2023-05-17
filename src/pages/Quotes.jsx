import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { motion } from "framer-motion";

const Quotes = () => {
  const { data, refetch } = useQuery(["quote"], async () => {
    return await Axios.get('https://api.quotable.io/random?maxLength=80').then(res => res.data);
  })

  return (
    <div id="quote-page">
      <motion.div className="quote-container"
        initial={{ opacity: 0 }}
        key={data?.content}
        // transition={{ duration: 5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
      >
        <div className="quote-container__quote">
          <h1>{data?.content}</h1>
        </div>
        <div className="quote-container__author">
          <span> - {data?.author}</span>
        </div>
      </motion.div>

      <div className="generate-new-btn">
        <button onClick={refetch}>Generate New</button>
      </div>
    </div>
  )
}

export default Quotes;