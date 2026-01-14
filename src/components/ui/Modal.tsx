import type { ReactNode } from "react";
import { useNavigate } from "react-router";

interface ModalProps {
    title: string;
    children: ReactNode;
}

export function Modal({ title, children }: ModalProps) {
    const navigate = useNavigate();

    function handleClose() {
        navigate("/");
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-96 max-w-[90vw]">
                <div className="flex items-center justify-between p-4 border-b border-black-alpha-8">
                    <h2 className="text-lg font-bold">{title}</h2>
                    <button
                        onClick={handleClose}
                        className="text-light-gray hover:text-black text-xl leading-none cursor-pointer"
                    >
                        ✕
                    </button>
                </div>
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
}
