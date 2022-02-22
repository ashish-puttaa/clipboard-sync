import { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useGlobalState } from '../../context/store';

import './clip-page.styles.scss';
import BackButton from '../../components/buttons/back';

function ClipPage() {
   const { id } = useParams();
   const [context, dispatch] = useGlobalState();
   const { clipboard } = context;

   const [clipData, setClipData] = useState();

   useEffect(() => {
      setClipData(() => clipboard[id - 1]);
   }, [clipboard, id]);

   if (id > clipboard.length) {
      return <Redirect to="/404" />;
   }

   return (
      <div className="clip-page">
         <div className="header">
            <div className="index">{id}</div>
         </div>

         <pre className="content">{clipData}</pre>

         <div className="back-button-wrapper">
            <BackButton />
         </div>
      </div>
   );
}

export default ClipPage;

// <Link to={`/#clip${id}`}>
//    <div className="back-btn-wrapper">
//       <ArrowSVG className="back-btn" />
//    </div>
// </Link>;
