import './toast.styles.scss';

function Toast(props) {
   const { text, style } = props;

   return (
      <div className="toast" style={style}>
         <div className="content">{text}</div>
      </div>
   );
}

export default Toast;
