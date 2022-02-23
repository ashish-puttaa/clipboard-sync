import './save-changes-button.styles.scss';

function SaveChangesButton({ className }) {
   return <input type="submit" value="Save" className={`save-changes-button ${className}`} />;
}

export default SaveChangesButton;
