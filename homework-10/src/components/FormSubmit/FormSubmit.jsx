import { useFormContext } from "../Form";
import React, { useEffect, useState } from "react";
import {
    validatePassword,
    validateEmail,
    validateName,
    validatePhoneNumber,
} from "../../helper/validate";


import './style.css'

export const FormSubmit = ({ submit }) => {
    const [submitBtnPassword, setSubmitBtnPassword] = useState(false);
    const [submitBtnGForm, setSubmitBtnGForm] = useState(false)
    const { values } = useFormContext()

    const confirmGroup = ((validateName(values.firstName) === true
            && validateName(values.lastName) === true)
        && validateEmail(values.email) === true
        && validatePhoneNumber(values.phone) === true
        && values.gender !== undefined
        && values.race !== undefined
        && values.race.length !== 0
        && values.consent === true)

    const confirmOneUser = ((validateName(values.firstName) === true
            && validateName(values.lastName) === "The first letter should be capitalized"
        && validateEmail(values.email) === true
        && validatePhoneNumber(values.phone) === true
        && values.gender !== undefined
        && values.race !== undefined
        && values.race.length !== 0
        && values.consent === true))

    useEffect(() => {
        if (validatePassword(values.password) === null && values.password === values.confirmPassword) {
            if (!submitBtnPassword) {
                delete values.confirmPassword
            }
            setSubmitBtnPassword(true)
        } else {
            setSubmitBtnPassword(false)
        }

        if (confirmGroup || confirmOneUser ) {
            setSubmitBtnGForm(true)
        } else {
            setSubmitBtnGForm(false)
        }
    }, [values])


    return (
        <button
            className='button-submit'
            type="submit"
            disabled={submit || !submitBtnPassword && !submitBtnGForm}
        >
            Submit
        </button>
    )
}