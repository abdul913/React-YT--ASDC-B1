export const validate = (email, passord) => {
    let emailVal = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    let passordVal = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(passord)

    if (!emailVal) return "Email not valid"
    if (!passordVal) return "Passord not match"
    return null
}