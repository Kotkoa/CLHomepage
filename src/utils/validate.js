export default function validate(values) {
    const errors = {}
    if (!values.name) {
        errors.name = 'Required'
    } else if (values.name.length > 25) {
        errors.firstName = 'Must be 25 characters or less'
    }

    if (!values.message) {
        errors.message = 'Required'
    }

    if (!values.email) {
        errors.email = 'Required'
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address'
    }

    return errors
}
