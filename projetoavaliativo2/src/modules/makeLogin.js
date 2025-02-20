import { getUserList } from "./userFunctions";

export default function makeLogin(loginFormData) {
    const userList = getUserList()
    const loginEntries = Object.fromEntries(loginFormData.entries())
    const userLogged = userList.find(user => user.email === loginEntries.email && user.pass === loginEntries.pass)
    if (userLogged === undefined) {
        return false
    }

    return userLogged;
}
