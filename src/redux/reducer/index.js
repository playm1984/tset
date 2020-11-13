const initialState = {
    users: [
        {
            login: 'guest',
            password: 'guest',
            titleName: 'Guest',
            property:{
                addNews:true,
                delNews: false,
                agreeNews: false
            }
        },
        {
            login: 'admin',
            password: 'admin',
            titleName: 'Admin',
            property:{
                addNews: false,
                delNews: true,
                agreeNews: true
            }
        }
    ],
    news: {
        1: {
            id: 1,
            display: true,
            title: 'Прогноз погоды на 12 ноября',
            date: 'Сегодня, 21:00',
            text: 'Прогноз погоды на четверг, 12 ноября, по всей территории Казахстана представили на сайте РГП "Казгидромет". В Нур-Султане переменная облачность, снег, ветер 9-14 м/с. Температура ночью 5-7 градусов мороза, днём 2-4 градуса мороза. В Акмолинской области ожидается туман, гололёд, низовая метель, ветер 15-20 м/с. В Алматы переменная облачность, дождь, ветер до 8 м/с. Температура ночью от 0 до 2 градусов мороза, днём 8-10 тепла. В Шымкенте переменная облачность, дождь, ветер 8-13 м/с. Температура ночью 3-5 градусов тепла, днём 5-7 тепла.'
        },
        2: {
            id: 2,
            display: true,
            title: 'В Актобе провели экорейд для галочки. Он длился 28 минут',
            date: 'Сегодня, 20:08',
            text: 'Департамент экологии по Актюбинской области и местная полицейская служба провели рейд по контролю дымности дизельных автотранспортных средств за 28 минут. Об этом сообщили в проектном офисе "Ақтөбе – адалдық алаңы". На рейд, входящий в комплексный план мероприятии по улучшению экологической обстановки Актюбинской области на 2020-2024 годы были приглашены журналисты и представитель проектного офиса в качестве наблюдателя.'
        },
        3: {
            id: 3,
            display: true,
            title: 'В Казахстане запустили кампанию "Айналайын SOS" против травли в школах',
            date: 'Сегодня, 18:05',
            text: 'В Казахстане стартовала первая информационно-образовательная кампания "Айналайын SOS" против травли в школьной среде. Авторы проекта создали социальные плакаты на тему буллинга и безопасности детей в школах.'
        },
        5: {
            id: 5,
            display: false,
            title: 'В Казахстане запустили кампанию "Айналайын SOS" против травли в школах',
            date: 'Сегодня, 18:05',
            text: 'В Казахстане стартовала первая информационно-образовательная кампания "Айналайын SOS" против травли в школьной среде. Авторы проекта создали социальные плакаты на тему буллинга и безопасности детей в школах.'
        }
    },
    usersNow: {
        login: 'other',
        password: 'other',
        titleName: 'гость',
        property:{
            addNews: false,
            delNews: false,
            agreeNews: false
        }
    },
    popUp:false,
    tempNews: {
        id: 4,
        display: false,
        title: 'Лавров заявил, что в Карабахе не будет турецких миротворцев',
        date: 'Сегодня, 13:23',
        text: 'В Нагорном Карабахе не будет турецких миротворцев, заявил глава МИД России Сергей Лавров. Наблюдатели из Турции смогут присутствовать только в совместном центре контроля за прекращением огня в Азербайджане вне зоны конфликта.'
    },
    category: {}
}

    

const reducer = ( state = initialState, action ) => {
    switch(action.type){
        case 'SHOW_POP_UP': {
            return{
                ...state,
                popUp: !state.popUp
            } 
        }

        case "LOG_IN": {
            const inputValue = {
                login: action.payload.login.toLowerCase(),
                password: action.payload.password.toLowerCase()
            };

            // const indexUser = state.users.findIndex(el => el.login === inputValue.login && el.pass === inputValue.pass);

            const newsItems = Object.keys(state.news).map((key) => {return state.news[key]});
            const sortNews = newsItems.filter(item => item.display === true);
            
            const person = () => {
                for(let i = 0; i < state.users.length; i++ ){
                    if(state.users[i].login === inputValue.login && state.users[i].pass === inputValue.pass){
                        // console.log(true, state.users[i]);
                        return state.users[i]
                    }
                }
                // console.log(false);
                return state.usersNow;
            }

            const userNow = person()
            console.log(userNow.titleName);
            console.log(sortNews);
            return{
                ...state,
                // usersNow: state.users[indexUser],
                usersNow: userNow,
                popUp:false
            }
        }

        case 'LOG_OUT':{
            
            return{
                ...state,
                usersNow: initialState.usersNow,
                popUp:false,
                category: {}
            }
        }

        case 'ADD_NEWS_BTN':{
            const newItemCat = {
                ...state.category,
                [4]: state.tempNews
            }
            const newItemNews = {
                ...state.news,
                [4]: state.tempNews
            }
            return{
                ...state,
                category: newItemCat,
                news: newItemNews
            }
        }

        case 'DEL_NEWS_BTN':{
            const newItemNews = {
                ...state.news
            }
            const newItemCat = {
                ...state.category
            }
            delete newItemNews[4]
            delete newItemCat[4]
            return{
                ...state,
                news: newItemNews,
                category: newItemCat
            }
        }

        case 'AGREE_NEWS_BTN':{
            const newItemCat = {
                ...state.news,
                [4]:{
                    display: true,
                    id: state.news[4].id,
                    title: state.news[4].title,
                    date: state.news[4].date,
                    text: state.news[4].text
                }
            }
            const newItemNews = {
                ...state.news,
                [4]:{
                    display: true,
                    id: state.news[4].id,
                    title: state.news[4].title,
                    date: state.news[4].date,
                    text: state.news[4].text
                }
            }
            return{
                ...state,
                news: newItemNews,
                category: newItemCat
            }
        }

        case 'FILLTER_NEWS': {
            const news = () => {
                if(state.usersNow.titleName !== 'гость'){
                    return state.news
                } else {
                    const newsItems = Object.keys(state.news).map((key) => {return state.news[key]});
                    const sortNews = newsItems.filter(item => item.display === true);
                    console.log(sortNews);
                    return sortNews
                }
            }

            const newsNow = news()

            return {
                ...state,
                category: newsNow
            }
        }
        
        default:
            return state
    }
}

export default reducer