function Modal({ isOpen, onClose, children }) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
			<div className="bg-white p-5 rounded-lg">{children}</div>
		</div>
	);
}

export default Modal;
