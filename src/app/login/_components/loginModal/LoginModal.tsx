"use client";

import { useOnclickOutside } from "@/hooks/useOnClickOutSide";
import { useRef, useState } from "react";
import LoginModalTip from "./LoginModalTip";
import LoginModalTop from "./LoginModalTop";
import ModalButton from "./ModalButton";
import ModalInput from "./ModalInput";
import ModalTitle from "./ModalTitle";

type LoginModalProps = {
  setModalOpen: (value: boolean) => void;
};

const LoginModal = ({ setModalOpen }: LoginModalProps) => {
  const [userEmail, setUserEmail] = useState("");
  const modalRef = useRef(null);

  useOnclickOutside(modalRef, () => setModalOpen(false));

  return (
    <div className="w-full h-screen fixed top-0 flex items-center justify-center bg-[#15232F] bg-opacity-80 z-10">
      <div
        ref={modalRef}
        className="w-[642px] bg-white p-[40px] rounded-[10px]"
      >
        <LoginModalTop onClick={() => setModalOpen(false)} />
        <div className="mt-[37px]">
          <ModalTitle />
          <ModalInput
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <LoginModalTip />
          <ModalButton onClick={() => console.log("모달 버튼")} />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
