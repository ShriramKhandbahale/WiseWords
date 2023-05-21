import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// assets
import WhatsappIcon from '@assets/whatsapp-logo.svg';
import FacebookIcon from '@assets/facebook-logo.svg';
import TwitterIcon from '@assets/twitter-logo.svg';
import CopyIcon from '@assets/copy-icon.svg';

const ShareBar = (props) => {
  const [copied, setCopied] = useState(false);

  const websiteURL = 'https://shriramkhandbahale.github.io/wisewords';
  const msg = `"${props.quote}"\n- ${props.author}\n\n`;

  const copyToClipboard = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 500)
    navigator.clipboard.writeText(msg + websiteURL)
  }
  return (
    <div className='share-bar'>

      <div className='copy-to-clipboard' onClick={copyToClipboard}>
        <AnimatePresence>
          {copied &&
            <motion.div className="copied-msg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span>copied</span>
            </motion.div>
          }
        </AnimatePresence>
        <img src={CopyIcon} alt="copy" ></img>
      </div>

      <WhatsappShareButton url={websiteURL} title={msg}>
        <img src={WhatsappIcon} alt="whatsapp" />
      </WhatsappShareButton>

      <TwitterShareButton url={websiteURL} title={msg}>
        <img src={TwitterIcon} alt="twitter" />
      </TwitterShareButton>

      <FacebookShareButton url={websiteURL}>
        <img src={FacebookIcon} alt="facebook" />
      </FacebookShareButton>

    </div>
  );
};

export default ShareBar;
