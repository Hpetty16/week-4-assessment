const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const formElement = document.getElementById("myForm")
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const formTypeElement = document.getElementById("typeCompliment")
const nameTypeCompInput = document.getElementById("typeComp")
const indexSelect = document.getElementById("indexSelect");
const newNameInput = document.getElementById("newNameInput");
const indexButton = document.getElementById("indexButton");
const indexSelectDelete = document.getElementById("indexSelectDelete");
const deleteButton = document.getElementById("deleteButton");






const getCompliment = () => {
    axios.get("http://localhost:4004/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4004/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const submitMyForm = (event) => {
    event.preventDefault()
    const name = nameInput.value
    const email = emailInput.value
    const inputValue = {
        name:name,
        email: email
    }
    axios.post("http://localhost:4004/api/formSubmitted",inputValue)
    .then((response) => {
        if(response.data.success) {
            alert (`Your form has been submitted`)
        } else {
            alert(`There was a error submitting your form`)
        }
    })
};

const putName = () => {
    const putBody = {
        newName: newNameInput.value
    }
    axios.put(`http://localhost:4004/api/put/name/${indexSelect.value}`, putBody)
        .then((res) => {
            alert(res.data);
        })
};

const deleteName = () => {
    axios.delete(`http://localhost:4000/api/delete/name/${indexSelectDelete.value}`)
        .then((res) => {
            alert(res.data);
        })

};




complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
formElement.addEventListener('submit', submitMyForm)
indexButton.addEventListener('click', putName)
deleteButton.addEventListener('click', deleteName);
