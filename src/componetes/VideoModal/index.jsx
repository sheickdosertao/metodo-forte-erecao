
import "../../styles/VideoModal.css";

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  // Se o modal não estiver aberto, não renderiza nada
  if (!isOpen) return null;

  const handleCheckout = () => {
   const checkoutUrl = "https://pay.hotmart.com/T85014494J";

   window.location.href = checkoutUrl;
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/BViTYHHlt0k?si=f_4RylQ8Ybjq0CyD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div className="checkout-container">
          <button className="checkout-button" onClick={handleCheckout}>Compra Agora</button>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;