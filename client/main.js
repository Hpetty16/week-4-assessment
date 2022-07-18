const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("https://localhost:4004/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("https://localhost:4004/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const funBtn = document.getElementById("funButton")

const getFun = () => {
    axios.get("https://localhost:4004/api/fun/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const workoutBtn = document.getElementById("workoutButton")

const getWorkout = () => {
    axios.get("https://localhost:4004/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


 complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
funBtn.addEventListener('click', getFun)
workoutBtn.addEventListener('click', getWorkout)
