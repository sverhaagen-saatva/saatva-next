import { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// TODO: Leaving this commented out for now as we move to cordial
// import { subscribeUser } from '../../../service'
// import { createCordialContact } from '../../../utils/cordial'
// import { useTrackEventForGa } from '../../hooks'
import { Button } from '@components/Button'
import { TextInput } from '@components/TextInput'

import styles from './EmailSubscriptionForm.module.scss'

const EmailSubscriptionForm = ({
    // TODO: Leaving this commented out for now as we move to cordial
    // emailKey,
    // emailOptions,
    // emailExists,
    className,
    ctaCopy,
    emailSuccess,
    errorMsg,
    inputName,
    standAloneInput,
    validationCallback
}) => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const updateEmail = (string) => {
        setEmail(string)
        clearMessages()
    }
    const clearMessages = () => {
        setError('')
        setSuccess('')
    }
    // TODO: this is a super hack, we want to do proper form validation as we cannot (and should not) rely on cordial to do it for us
    const validateEmail = (email) => {
        const regex = /^\s*(([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]{1}([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]|\.(?!\.))*)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]{1}@[a-zA-Z0-9]{1}[a-zA-Z0-9-]+[a-zA-Z0-9]{1}(?:\.[a-zA-Z]{2,}))\s*$/g
        return regex.test(email)
    }
    const submitEmail = async () => {
        // TODO: this is a super hack, we want to do proper form validation as we cannot (and should not) rely on cordial to do it for us
        setError('')
        setSuccess('')
        setEmail('')
        if (validateEmail(email)) {
            validationCallback()
            const subscribeValues = {
                email: email
            }
            try {
                // const subscribed = await createCordialContact(subscribeValues)
                // if (subscribed) {
                //     setSuccess(emailSuccess || 'You\'ve been subscribed!')
                //     trackGaEmailSubscription()
                // } else {
                //     setError('Something went wrong.')
                // }
            } catch (error) {
                window.ineum('subscribedUserEmailError', error, { msg: error.message })
                setError('Something went wrong.')
            }
        } else {
            setError(errorMsg)
        }
    }
    const classes = classNames(styles.emailSubscriptionForm, className)
    const inputClasses = classNames(styles.emailInput, {
        'emailSubscriptionForm__emailInput--has-error': error,
        'emailSubscriptionForm__emailInput--standAloneInput': standAloneInput
    })
    const labelClasses = classNames('emailSubscriptionForm__label', {
        'emailSubscriptionForm__label--has-error': error,
        'emailSubscriptionForm__label--standAloneInput': standAloneInput
    })
    const buttonClasses = classNames(styles.button, {
        'emailSubscriptionForm__button--standAloneInput': standAloneInput
    })
    return (
        <div className={classes}>
            <TextInput
                inputName={inputName}
                className={inputClasses}
                errorClassName="emailSubscriptionForm__formError"
                errorMessage={error || 'Email Error'}
                labelText={error || success || 'Your Email Address'}
                labelClassName={labelClasses}
                inputClassName={styles.input}
                initialValue={email}
                onTextChange={(e) => updateEmail(e.target.value)}
                pattern="^\s*(([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]{1}([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]|\.(?!\.))*)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]{1}@[a-zA-Z0-9]{1}[a-zA-Z0-9-]+[a-zA-Z0-9]{1}(?:\.[a-zA-Z]{2,}))\s*$"
                onClick={() => clearMessages()}
                onFocus={() => clearMessages()} />
            <Button
                className={buttonClasses}
                kind="primary"
                type="submit"
                onClick={() => submitEmail()}
                onSubmit={() => submitEmail()}>
                {ctaCopy}
            </Button>
        </div>
    )
}
EmailSubscriptionForm.propTypes = {
    validationCallback: PropTypes.func,
    ctaCopy: PropTypes.string,
    errorMsg: PropTypes.string,
    emailKey: PropTypes.string,
    emailOptions: PropTypes.object,
    emailSuccess: PropTypes.string,
    emailExists: PropTypes.string,
    className: PropTypes.string,
    inputName: PropTypes.string,
    standAloneInput: PropTypes.bool
}
EmailSubscriptionForm.defaultProps = {
    emailKey: 'Saatva',
    inputName: 'emailSubscription',
    validationCallback: () => { },
    errorMsg: 'Invalid email',
    standAloneInput: false
}
export default EmailSubscriptionForm
