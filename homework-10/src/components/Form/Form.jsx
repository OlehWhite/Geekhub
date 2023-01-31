import React, {useContext, useImperativeHandle, useRef, useState} from "react";

export const FormContext = React.createContext('');

export function useFormContext() {
    const context = useContext(FormContext)
    if (!context) {
        throw new Error('No Form was provider. Your components must be wrapper in a <Form/> component.')
    }
    return context
}

export const Form = React.forwardRef(({
    onSubmit: propsOnSubmit,
    children,
    ...rest
}, ref) => {
    const formRef = useRef();
    const submitRef = useRef();

    useImperativeHandle(ref, () => ({
        submit: () => {
            submitRef.current.click();
        }
    }))

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const isValid = Object.keys(errors).length === 0;

    const setValue = (name, value) => {
        setValues(prevState => {
            const values = JSON.parse(JSON.stringify(prevState))
            if (value) {
              values[name] = value;
            }
            if (!value && prevState[name]) {
            delete values[name]
            }
            return values
        })
    }
    const setError = (name, message) => {
        setErrors(prevState => {
            const errors = JSON.parse(JSON.stringify(prevState))
            if (message) {
                errors[name] = message;
            }
            if (!message && prevState[name]) {
                delete errors[name]
            }
            return errors
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        setIsSubmitting(true)

        try {
            if (propsOnSubmit) {
                await propsOnSubmit(values)
            }
        } catch (error) {
            console.error(error)
            alert('The requested action was not successful')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <FormContext.Provider value={{
            isSubmitting,
            isValid,
            values,
            setValues,
            errors,
            setValue,
            setError
        }}>
            <form
                {...rest}
                ref={formRef}
                onSubmit={onSubmit}
            >
                { typeof children === 'function' ? children({ isSubmitting, isValid, values, setValues, errors }) : children}
            </form>
        </FormContext.Provider>
    )
})