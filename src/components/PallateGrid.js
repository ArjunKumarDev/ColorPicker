import React, { useState } from "react";


const PalleteGrid = ({ colorPallate = [] }) => {
    const [copied, setCopied] = useState({ value: false, idx: null })

    const copyHexCode = (code, idx) => {
        navigator.clipboard.writeText(code)
        setCopied({ value: true, idx })

        setTimeout(() => {
            setCopied({ value: false, idx: null })
        }, 1000)
    }

    return (
        <div className="pallate__grid">
            {colorPallate.length > 0 && colorPallate.map((c, idx) => {
                return (
                    <>
                        <div key={idx} style={{ backgroundColor: c }} onClick={() => copyHexCode(c, idx)} className="pallate__grid-item">
                            <div>{copied.value && copied.idx === idx ? "Copied!!" : c}</div>
                        </div>

                    </>
                )
            })}
        </div>
    )
}

export default PalleteGrid;