import { useHistory } from 'react-router-dom';
import ArrowSVG from '../../../assets/right-arrow.svg';
import './back-button.styles.scss';

function BackButton() {
   const history = useHistory();

   const handleClick = () => {
      history.goBack();
   };

   return (
      <div className="back-button" onClick={handleClick}>
         <div className="back-button__icon">
            <ArrowSVG />
         </div>
      </div>
   );
}

export default BackButton;
