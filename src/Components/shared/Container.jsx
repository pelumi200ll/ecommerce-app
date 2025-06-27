import React from 'react'

function Container({ children, className}) {
    return (
        <div className={`max-w-5xl w-full max-auto ${className}`}>
            {children}
        </div>
    )
}

export default Container