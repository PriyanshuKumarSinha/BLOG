import React, { useId } from 'react'

// for updating status of post

function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useId();
    return (
        <div>
            {label && <label
                htmlFor={id}
                className={`inline-block mb-1 p-1`}
            >
                {label}
            </label>}

            <select
                className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref={ref}
                id={id}
                {...props}

            >
                
                {options?.map((option)=>(
                    <option 
                    key={option}
                    value={option}
                    >{option}</option>
                ))}

            </select>
        </div>
    )
}

export default React.forwardRef(Select)