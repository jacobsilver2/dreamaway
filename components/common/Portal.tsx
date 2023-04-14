import { useRef, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

interface PortalProps {
  children: ReactNode;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export const MobileOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.brown};
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? 0.98 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  overflow: hidden;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  cursor: pointer;
`;

export const Portal = ({ children, isOpen, setOpen }: PortalProps) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    if (!isOpen) {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return mounted && ref.current
    ? createPortal(
        <MobileOverlay isOpen={isOpen}>
          <CloseButton onClick={() => setOpen(false)}>X</CloseButton>
          {children}
        </MobileOverlay>,
        ref.current
      )
    : null;
};
