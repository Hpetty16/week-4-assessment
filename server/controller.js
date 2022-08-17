const nameArr = [`Haywood`,`Dominic`, `Jade`, `Austin`]


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliments = compliments[randomIndex];
      
        res.status(200).send(randomCompliments);
    },
    

    getFortune: (req, res) => {
        const fortune = [
        "A beautiful, smart, and loving person will be coming into your life.", 
        "A dubious friend may be an enemy in camouflage.",
        "A golden egg of opportunity falls into your lap this month.",
        "A hunch is creativity trying to tell you something.",
        "A pleasant surprise is waiting for you."
    ];

        let fortIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[fortIndex];

        res.status(200).send(randomFortune);
    },

    formSubmitted: (req,res) => {
        formDatabase.push(req.body)
        console.log(formDatabase)
        res.status(200).send({success: true})
    },
    
    putName: (req, res) => {
        console.log("Works")
        console.log(req.params);
        console.log(req.body);

        const indexToEdit = +req.params.indexToEdit
        nameArr(indexToEdit) = req.body.newName
        res.status(200).send(nameArr)
    },

    deleteName: (req,res) => {
        console.log("works")
        console.log(req.params)

        const indexToDelete = +req.params.id;

        nameArr.splice(indexToDelete, 1);

        res.status(200).send(nameArr);
    },

}

const formDatabase = [
    {
    name: `Tiffany Garret`,
    email: `bosstiff546@gmail.com`
    },
]