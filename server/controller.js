module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    

    getFortune: (req, res) => {
        const fortune = ["A beautiful, smart, and loving person will be coming into your life.", "A dubious friend may be an enemy in camouflage.","A golden egg of opportunity falls into your lap this month.","A hunch is creativity trying to tell you something.","A pleasant surprise is waiting for you."];

        let fortIndex = Math.floor(Math.random() * fortune.length);
        let randomFortunes = fortune[fortIndex];

        res.status(200).send(randomFortunes);
    },

    getFun: (req, res) => {
        const fun = [`Learn to Juggle`, `Do Some Gardening`, `Visit Friends`, `Visit Free Museums`, `Visit a Zoo or Wildlife Reserve`];

        let fortIndex = Math.floor(Math.random() * fun.length);
        let randomFortunes = fun[fortIndex];

        res.status(200).send(randomFun);
    },

    getWorkout: (req, res) => {
        const workout = [`Walking`, `Squats`, `Lunges`, `Push-ups`, `Abdominal Crunches`, `Go Swimming`];

        let fortIndex = Math.floor(Math.random() * workout.length);
        let randomWorkout = workout[fortIndex];

        res.status(200).send(randomWorkout);
    },

    

}

