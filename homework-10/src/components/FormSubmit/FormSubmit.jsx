import React from "react";

import { useFormContext } from "../Form/Form";

import './style.css'

export const FormSubmit = ({ submit }) => {
    const { isValid, values } = useFormContext()

    return (
        <button
            className='button-submit'
            type="submit"
            disabled={submit || !isValid || Object.keys(values).length === 0
        }
        >
            Submit
        </button>
    )
}