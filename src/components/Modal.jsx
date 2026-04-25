import ReactDOM from "react-dom";

export default function Modal(props) {
  const { showExerciseDescription, handleCloseModal } = props;
  const { name, description } = showExerciseDescription || {};

  return ReactDOM.createPortal(
    <div className="modal-container">
      <button className="modal-underlay" onClick={handleCloseModal} />
      <div className="modal-content">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>,
    document.getElementById("portal")
  );
}