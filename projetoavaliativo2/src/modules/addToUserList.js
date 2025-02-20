import { getUserList } from "./userFunctions"

export default function createUser(formData) {
    const userListData = getUserList()
    let registerEntries = Object.fromEntries(formData.entries())
    if (userListData.find((user) => user.email === registerEntries.email) !== undefined) {
        throw new Error('Usuário já cadastro')
    }

    registerEntries.id = "id" + Math.random().toString(16).slice(2)
    userListData.push(registerEntries)
    localStorage.setItem('userList', JSON.stringify(userListData))

    return true
}
