import React, {useRef, useState} from "react";

export const FormContext = React.createContext({
    isSubmitting: false
});

export const Form = ({
    onSubmit: propsOnSubmit,
    children,
    ...rest
}) => {
    const formRef = useRef();

    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault()
        setIsSubmitting(true)

        const formData = new FormData(formRef.current);
        const value = serialize(formData);

        try {
            if (propsOnSubmit) {
                await propsOnSubmit(value)
            }
        } catch (error) {
            console.error(error)
            alert('The requested action was not successful')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <FormContext.Provider value={{ isSubmitting }}>
            <form
                {...rest}
                ref={formRef}
                onSubmit={onSubmit}
            >
                { typeof children === 'function' ? children({ isSubmitting }) : children}
            </form>
        </FormContext.Provider>
    )
}

function serialize(data) {
    let obj = {};
    for (let [key, value] of data) {
        if (obj[key] !== undefined) {
            if (!Array.isArray(obj[key])) {
                obj[key] = [obj[key]]
            }
            obj[key].push(value)
        } else {
            obj[key] = value
        }
    }
    return obj
}
