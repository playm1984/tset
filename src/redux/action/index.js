const showPopUp = () => {
    return{
        type: 'SHOW_POP_UP'
    }
}

const logIn = (data) => {
    return{
        type: "LOG_IN",
        payload: {...data}
    }
}

const logOut = () => {
    return{
        type: 'LOG_OUT'
    }
}

const addNewsBtn = () => {
    return{
        type: 'ADD_NEWS_BTN'
    }
}

const delNewsBtn = () => {
    return{
        type: 'DEL_NEWS_BTN'
    }
}

const agreeNewsBtn = () => {
    return{
        type: 'AGREE_NEWS_BTN'
    }
}

const fillterNews = () => {
    return{
        type: 'FILLTER_NEWS'
    }
}

export { showPopUp, logIn, logOut, addNewsBtn, delNewsBtn, agreeNewsBtn, fillterNews }
