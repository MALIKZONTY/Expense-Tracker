import { X, AlertTriangle, CheckCircle } from 'lucide-react';

const ConfirmModal = ({ title, message, confirmText, cancelText, type, onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay fade-in" style={{ zIndex: 2000 }}>
      <div className="card confirm-modal slide-up">
        <button className="modal-close-btn" onClick={onCancel}>
          <X size={18} />
        </button>

        <div className="confirm-modal-content">
          <div className={`confirm-icon-wrapper ${type}`}>
            {type === 'success' ? <CheckCircle size={24} /> : <AlertTriangle size={24} />}
          </div>
          
          <div className="confirm-text-content">
            <h3>{title}</h3>
            <p>{message}</p>
          </div>
        </div>

        <div className="confirm-modal-actions">
          <button className="btn btn-secondary" onClick={onCancel}>
            {cancelText}
          </button>
          <button 
            className={`btn ${
              type === 'danger' ? 'btn-danger' : 
              type === 'success' ? 'btn-success' : 
              'btn-primary'
            }`} 
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
