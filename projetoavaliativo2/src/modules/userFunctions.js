export const getUserList = () => {
    const userListData = localStorage.getItem('userList')
    let userList = JSON.parse(userListData)
    if (userList === null) {
        userList = []
    }

    return userList
}

export const userIsLogged = () => {
    return !!localStorage.getItem('userLogged')
}
