import React, { useId } from 'react'

// In Input we need to use a hook called forwardRef, since we want to change the state of parent element (say form)
// whenever input field is changed

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
},ref) {

    const id = useId();
    return (
        <div className='w-full'>
            {label && <label
                htmlFor={id}
                className={`inline-block mb-1 p-1`}
            >
                {label}

            </label>}
            <input
                type={type}
                id={label}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                {...props}

            />
        </div>
    )
})

export default Input