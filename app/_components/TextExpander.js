"use client"
import { useState } from "react"

function TextExpander({children}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const displayText = isExpanded? children : children.split(" ").slice(0, 40).join(" ") + "...";

    return (
        <span>
            <p className="text-lg text-primary-300 mb-10">{displayText}</p>
            <button onClick={()=> setIsExpanded(!isExpanded)}>
                {isExpanded? 'Show less': 'Show More!'}
            </button>
        </span>
    )
}

export default TextExpander
