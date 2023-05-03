const textbox = document.getElementById("textbox")

if(localStorage.getItem("notePage:text")!= null) {
    console.log(localStorage.getItem("notePage:text"))
    textbox.innerHTML = localStorage.getItem("notePage:text")
}

document.addEventListener("keydown", (e) => {
    textbox.removeChild(document.getElementById("cursor"))
    if(e.ctrlKey) {
        if(e.key == "n") {
            textbox.innerHTML = ""
        }
    } else if(e.key == " ") {
        const inputtoadd = document.createElement("span")
        inputtoadd.innerText = " "
        textbox.appendChild(inputtoadd)
    } else if(e.key.length == 1) {
        const spanthing = document.createElement("span")
        const inputtoadd = document.createTextNode(e.key)
        spanthing.appendChild(inputtoadd)
        textbox.appendChild(spanthing)
    } else if(e.key == "Enter") {
        const inputtoadd = document.createElement("br")
        textbox.append(inputtoadd)
    } else if(e.key == "Backspace") {
        if(textbox.childNodes.length >= 1)
        textbox.removeChild(textbox.lastChild)
    }
    const cursor = document.createElement("div")
    cursor.id = "cursor"
    textbox.appendChild(cursor)
    localStorage.setItem("notePage:text", textbox.innerHTML)
})