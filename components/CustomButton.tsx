"use client";

import { CustomButtonProps } from "@/types";

function CustomButton({text, containerStyles, handleClick, btnType }: CustomButtonProps    ) {
    return (
        <button
            disabled={false}
            type={btnType}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1`}>
                {text}
            </span>
        </button>
    )
}

export default CustomButton