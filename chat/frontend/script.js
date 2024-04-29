const login = document.querySelector(".login")
const loginForm = document.querySelector(".login_form")
const loginInput = document.querySelector(".login_input")

const chat = document.querySelector(".chat")
const chatForm = document.querySelector(".chat_form")
const chatInput = document.querySelector(".chat_input")
const chatMessages = document.querySelector(".chat_messages")


const colors = [
    "cadetblue",
    "darkgoldenrod",
    "cornflowerblue",
    "darkkhaki",
    "hotpink",
    "gold"
]


const user = { id: "", name: "" , color: ""}

let websocket

const createMessageSelfElement = (conteudo) => {
    const div = document.createElement("div")
    div.classList.add("message--self")
    div.innerHTML = content 

    return div
}


const createMessageotherElement = (conteudo,sender,senderColor) => {
    const div = document.createElement("div")
    const span = document.createElement("span")

    div.classList.add("message--other")
    
    div.classList.add("message--self")
    span.classList.add("message--sender")
    span.style.color = senderColor

    div.appendChild(span)

    span.innerHTML = sender 

    div.innerHTML += content 

    return div
}


const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}

const scrollScreen = () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    })
}

const processMessage = ({data}) => {
    const {usaerId , userColor , userName , conteudo} = (JSON.parse(data))

    const message =
         userId == user.id 
            ? createMessageSelfElement(conteudo) 
            : createMessageotherElement(conteudo,userName,userColor)


    chatMessages.appendChild(message)

    scrollScreen()
}



const handleLogin = (event) => {
    event.preventDefault()

    user.id = crypto.randomUUID()
    user.name = loginInput.value
    user.color = getRandomColor()

    login.style.display = "none"
    chat.style.display = "flex" 

    websocket = new WebSocket("ws://localhost: 8080") 
    ws.onmessage = processMessage
   

    console.log(user)
}

const sendMessage = (event) => {
    event.preventDefault()

    const message =  {
        userId: user.id ,
        userName: user.name ,
        userColor: user.color ,
        conteudo: chatInput.value 
    }


    ws.send(JSON.stringify(message))
    chatInput.value = ""
}

loginForm.addEventListener("submit", handleSubmit)
chatForm.addEventListener("submit", sendMessage)




