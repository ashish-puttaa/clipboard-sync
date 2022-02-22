import { useRef, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

import Toast from '../toast';
import ArrowSVG from '../../assets/right-arrow.svg';

import './mini-clip.styles.scss';

function Clip(props) {
   const { text, index } = props;
   const [showToast, setShowToast] = useState(false);

   function copyToClipboard(newClip) {
      // navigator.clipboard is only available when using https or localhost
      navigator.clipboard.writeText(newClip).then(
         function onfulfilled() {
            console.log('clipboard successfully set to', text);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 1000);
         },
         function onrejected() {
            console.log('clipboard write failed');
         }
      );
   }

   return (
      <div className="mini-clip" id={`mini-clip${index}`}>
         <div className="cliptext-wrapper" onClick={() => copyToClipboard(text)}>
            <pre className="cliptext">{text}</pre>
         </div>

         <Link to={`/clip/${index}`}>
            <div className="arrow-wrapper">
               <ArrowSVG className="arrow" />
            </div>
         </Link>

         <Toast text={'Copied'} style={{ display: showToast ? 'block' : 'none' }} />
      </div>
   );
}

export default Clip;

// import { useHistory, useLocation } from 'react-router-dom';
// const location = useLocation();
// const history = useHistory();

// const clipRef = useRef();

// useEffect(() => {
//    console.log(clipRef);

//    if (location.hash === `#${clipRef.current.id}`) {
//       clipRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
//    }
// }, []);

// function viewClip(e) {
//    e.stopPropagation();
//    history.push(`/clip/${index}`);
// }
