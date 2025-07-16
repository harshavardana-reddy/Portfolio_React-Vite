/* eslint-disable react/prop-types */
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

export default function ImageModal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={onClose}
        >
            {/* Backdrop Blur */}
            <motion.div
                className="absolute inset-0 bg-black/60 backdrop-blur-[8px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            />

            {/* Modal content */}
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative z-10 w-full max-w-5xl p-4"
            >
                {children}
            </div>
        </motion.div>,
        document.getElementById('modal-root')
    );
}
