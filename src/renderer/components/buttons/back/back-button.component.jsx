import { useNavigate } from 'react-router-dom';
import ArrowSVG from '../../../assets/right-arrow.svg';
import './back-button.styles.scss';

function BackButton() {
   const navigate = useNavigate();

   const handleClick = () => {
      navigate(-1);
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
