
const mainDiv = document.querySelector(".main")

//Another way to declare a function
//This is a utility function which 
//capitalize first character of a string

/**
 * Function which capitalize first character of a string
 * @param  {text} string - text to have first character capitalized
 * @return {text} text that has first character capitalized
 */
const capFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


const butText = [
    "edit", "close"
]

var contactList = [
    {
      name: "Roberta Dobbs",
      email: "subgenius@slack.example.com",
      cell: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      
    }, 
    {
      name: "Bugs Bunny",
      email: "whatsup@doc.example.com",
      cell: "123-867-5309",
      address: "Warner Brothers Animation Lot",

    },
]

function removeAllChildren() {
    while (mainDiv.lastChild) {
        mainDiv.lastChild.remove()
    }
}

/* Index Page */

function cleanUpIndex() {
    removeAllChildren()
}

/**
 * Function which creates a DOM node
 * @param  {object} contact - An object that contains contact information
 * @return {DOM Node} A DOM node <a href=""><div><p></p></div></a>
 */
function createSingleIndex(contact) {
    const hLink = document.createElement("a")
    const linkDiv = document.createElement("div")
    linkDiv.classList.add("contact")

    const divPara = document.createElement("p")
    const linkText = document.createTextNode(contact.name)
    divPara.append(linkText)

    linkDiv.append(divPara)
    hLink.append(linkDiv)
    hLink.href = "page3.html"
    // Q4
    hLink.addEventListener("click", (e) => {
        e.preventDefault()
        contactList.forEach(element => {
            if (element.name == contact.name) {
              
                cleanUpIndex()
                renderView(contact)
                
        }}
        )
        
        
    })
    return hLink

}

/**
 * Function which render all DOM node on indext page
 * @param  [{object}] contactArray - An array of contact objects
 * @return none
 */
function renderIndex(contactArray) {
    contactArray.forEach( (ele) => {
        //Code reuse
        //We built the createSingleIndex function
        //we append the return node from the function
        //to the main div
        mainDiv.append(createSingleIndex(ele))

    })

}

/* View Single Contact page */

function cleanUpView() {
    removeAllChildren()
}

//First identify the structure/pattern of the main div on the view page
//then use various lookup tables to create the div structure by
//using loops instead of create each div one by one.
//We did not save a lot of coding time the first time 
//(or even spent more time) but
//will save time when the structure is changed in the future,
//or there are tens or hundred of divs to be created

//It is totally fine to manually build the div structure
//one child node by one child node.

/**
 * Function which render all DOM nodes on view page
 * @param  {object} contact - An object that contains contact information
 * @return none
 */
function renderView(contact) {
    //Optional - clear the page first before 
    //rendering another contact
    
    // cleanUpView()

    const viewPageClasses = [
        "contactinfo", "contactname", "contactemail",
        "contactphone", "contactaddress", "buttons"
    ]
    const txtPrefix = ["", "email: ", "cell: ", "address: "]
    
    //Use an array to store all the child div
    //so that we can refer back to them later
    let divArray = []

    //Get all the keys of the contact object passes to this function
    const keys = Object.keys(contact)
    const len = keys.length
 
    //Use a for loop to create all child div of the main div
    //Use viewPageClasses array as a template to create
    //all child divs and add class to each
    for (let i=0; i< viewPageClasses.length; i++) {
        let myDiv = document.createElement("div")
        myDiv.classList.add(viewPageClasses[i])

        //Only add text node on the div of classes
        // "contactinfo", ...., "contactaddress"
        if (i > 0 && i < 5) {
            const textNode = document.createTextNode(
                txtPrefix[i-1] + contact[keys[i-1]])
            myDiv.append(textNode)
        }
        divArray.push(myDiv)
        //If the newly created div is not contectinfo
        //we will append it to contactinfo div
        if (i > 0) 
            divArray[0].append(myDiv)

    }

    //Manually create the structure for contactname div
    const imgNode = document.createElement("img")
    imgNode.src = "./img/profile.jpg"
    imgNode.classList.add("profilepic")
    divArray[1].append(imgNode)

    //Create the buttons inside buttons div
    butText.forEach ((ele)=> {
        const myButton = document.createElement("button")
        myButton.classList.add("button")
        myButton.classList.add(ele)
        myButton.value = capFirstLetter(ele)

        const textNode = document.createTextNode(capFirstLetter(ele))
        myButton.append(textNode)

        divArray[5].append(myButton)
        
        
        // Q5
        myButton.addEventListener("click", (e) =>{
            cleanUpIndex()
            renderIndex(contact)
            e.preventDefault()
        })
    }) 


    // const close = document.querySelector(".button close")
    // close.addEventListener("click", (e) => {
    //     // renderIndex()
    //     // e.preventDefault()
    // })

    //Add contactinfo div to main div and done
    mainDiv.append(divArray[0])


}


function renderCreate () {
    // declare variable
    var contactEdit = document.createElement("div")
    var contactImg = document.createElement("div")
    var img = document.createElement("img")
    var outerform = document.createElement("div")
    var innerForm = document.createElement("form")
    var inputContainer = document.createElement("div")
    var contactName = document.createElement("input")
    var extraNameField = document.createElement("button")
    var extraPhoneField = document.createElement("button")
    var extraAddressField = document.createElement("button")
    var extraEmailField = document.createElement("button")
    var contactPhone = document.createElement("input")
    var contactAddress = document.createElement("input")
    var contactemail = document.createElement("input")
    var buttons = document.createElement("div")
    var buttonSave = document.createElement("button")
    var buttonCancle = document.createElement("button")
    // Give attribute accordingly 
    contactEdit.setAttribute("class", "contactedit")
    contactImg.setAttribute("class", "contactimg")
    img.setAttribute("class", "profilepic")
    img.src = "./img/profile.jpg"
    img.alt = "Profile picture"
    outerform.setAttribute("class", "form")
    inputContainer.setAttribute("class", "inputcontainer")
    contactName.type = "text"
    contactName.setAttribute("id", "contactname")
    contactName.name = "contactname"
    contactName.placeholder = "Contact Name"
    extraNameField.setAttribute("class", "extrafield")
    extraPhoneField.setAttribute("class", "extrafield")
    extraAddressField.setAttribute("class", "extrafield")
    extraEmailField.setAttribute("class", "extrafield")
    extraNameField.id = "extranamefield"
    extraNameField.name = "extranamefield"
    extraNameField.innerHTML = "+"
    extraPhoneField.id = "extraphonefield"
    extraPhoneField.name = "extraphonefield"
    extraPhoneField.innerHTML = "+"
    extraAddressField.id = "extraaddressfield"
    extraAddressField.name = "extraaddressfield"
    extraAddressField.innerHTML = "+"
    extraEmailField.id = "extraemailfield"
    extraEmailField.name = "extraemailfield"
    extraEmailField.innerHTML = "+"
    contactPhone.setAttribute("id", "contactphone")
    contactPhone.name = "contactphone"
    contactPhone.type = "tel"
    contactPhone.placeholder = "Contact Phone"
    contactAddress.setAttribute("id", "contactaddress")
    contactAddress.type = "text"
    contactAddress.name = "contactaddress"
    contactAddress.placeholder = "Contact Address"
    contactemail.setAttribute("id", "contactemail")
    contactemail.type = "email"
    contactemail.name = "contactemail"
    contactemail.placeholder = "Contact Email"
    buttons.setAttribute("class", "buttons")
    buttonSave.type = "submit"
    buttonSave.setAttribute("class", "botton save")
    buttonSave.id = "savecontact"
    buttonSave.name = "savecontact"
    buttonSave.innerHTML = "Save contact"
    buttonCancle.type = "reset"
    buttonCancle.setAttribute("class", "button cancel")
    buttonCancle.id = "cancel"
    buttonCancle.name = "cancel"
    buttonCancle.innerHTML = "Cancel"
    // append
    mainDiv.appendChild(contactEdit).appendChild(contactImg).appendChild(img)
    contactImg.appendChild(img)
    contactEdit.appendChild(outerform).appendChild(innerForm)
    innerForm.appendChild(inputContainer).appendChild(contactName)
    innerForm.appendChild(inputContainer.cloneNode()).appendChild(contactPhone).appendChild(extraPhoneField)
    innerForm.appendChild(inputContainer.cloneNode()).appendChild(contactAddress).appendChild(extraAddressField)
    innerForm.appendChild(inputContainer.cloneNode()).appendChild(contactemail).appendChild(extraEmailField)
    innerForm.appendChild(buttons).appendChild(buttonSave)
    buttons.appendChild(buttonCancle)

    // Q7
    buttonCancle.addEventListener("click", (e) => {
        cleanUpIndex()
        renderIndex(contactList)
        e.preventDefault()
    })

    // Q8 AND Q9
    buttonSave.addEventListener("click", (e) => {
        getname = document.querySelector("#contactname").value
        getemail = document.querySelector("#contactemail").value
        getcell = document.querySelector("#contactphone").value
        getaddress = document.querySelector("#contactaddress").value
        new_object = {
            name: getname,
            email: getemail,
            cell: getcell,
            address: getaddress
        }
        contactList.push(new_object)
        // console.log(contactList)
        e.preventDefault()
    })
}

//Q2
//Q3
const sidebarContact = document.querySelector("#contactshome")
const createContact = document.querySelector("#newcontact")

sidebarContact.addEventListener("click", (e)=>{
    cleanUpIndex()
    renderIndex(contactList)
    e.preventDefault()
})

createContact.addEventListener("click", (e) =>{
    cleanUpIndex()
    renderCreate(contactList)
    e.preventDefault()
})


