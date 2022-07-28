import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({children, toggleModal}) => {
    // ref is something as I have one value that,
    // I need to refer to the exact samething across all renders 
    const elRef = useRef(null);
    if(!elRef.current){   // elref is a frozen object, we can't assign a new proprty for it 
        elRef.current = document.createElement("div");
    }

    useEffect(() => {
        const modalRoot = document.getElementById("modal");
        modalRoot.appendChild(elRef.current);
        return () => modalRoot.removeChild(elRef.current);
      }, []);
    
      return createPortal(<div onClick={toggleModal}>{children}</div>, elRef.current);
    };
    
    export default Modal;