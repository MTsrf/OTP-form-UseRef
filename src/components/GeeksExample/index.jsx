import React from 'react'

const GeeksExample = () => {
    const handleChange = (e) => {
        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split("-");

        let fieldIntIndex = parseInt(fieldIndex, 10);

        // Check if no of char in field == maxlength
        if (value.length >= maxLength) {

            // It should not be last input field
            if (fieldIntIndex < 4) {

                // Get the next input field using it's name
                const nextfield = document.querySelector(
                    `input[name=field-${fieldIntIndex + 1}]`
                );

                // If found, focus the next field
                if (nextfield !== null) {
                    nextfield.focus();
                }
            }
        }
    };
    return (
        <>
            <input
                maxLength="1"
                name="field-1"
                onChange={handleChange}
            />
            <input
                maxLength="1"
                name="field-2"
                onChange={handleChange}
            />
            <input
                maxLength="1"
                name="field-3"
                onChange={handleChange}
            />
            <input
                maxLength="1"
                name="field-4"
                onChange={handleChange}
            />
        </>
    )
}

export default GeeksExample
