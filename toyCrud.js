const db = require('./models')

const toyCrud = async () => {
    try {
        // pet.belongsToMany(toy)
        // petInstance.getToys()
        // petInstance.countToys()
        // petInstance.hasToy()
        // petInstance.hasToys()
        // petInstance.setToys()
        // petInstance.addToy()
        // petInstance.addToys()
        // petInstance.removeToy()
        // petInstance.removeToys()
        // petInstance.createToy()

        // const [sami] = await db.pet.findOrCreate({
        //     where: {
        //         name: 'Sami'
        //     },
        //     defaults: {
        //         species: 'Australian Shepard',
        //         userId: 2
        //     }
        // })

        // create a new toy and associate it with sami
        // await sami.createToy({
        //     type: 'tug rope',
        //     color: 'red'
        // })

        // const newToy = await db.toy.create({
        //     type: 'ball',
        //     color: 'green'
        // })

        // find Gabe Jr
        // const gabeJr = await db.pet.findOne({
        //     where: {
        //         name: "Gabe Jr."
        //     }
        // })

        // console.log(gabeJr)

        // const greenBall = await db.toy.findOne({
        //     where: {
        //         type: 'ball',
        //         color: 'green'
        //     }
        // })
        // console.log(greenBall)
        // associating two existing entities
        // could also be gabeJr.addToy(greenBall)
        // await greenBall.addPet(gabeJr)

        // const spiderNip = await db.toy.create({
        //     type: 'water',
        //     color: 'clear'
        // })

        // const string = await db.toy.create({
        //     type: 'string',
        //     color: 'white'
        // })

        // adding two toys at once to a pet
        // await gabeJr.addToys([spiderNip, string])
        
        // const tugRope = await db.toy.findOne({
        //     type: 'tug rope'
        // })

        // await tugRope.addPet(gabeJr)
        // const toyCount = await gabeJr.countToys()
        // console.log(toyCount)
        // toy.belongsToMany(pet)
        // toyInstance.getPets()
        // toyInstance.countPets()
        // toyInstance.hasPet()
        // toyInstance.hasPets()
        // toyInstance.setPets()
        // toyInstance.addPet()
        // toyInstance.addPets()
        // toyInstance.removePet()
        // toyInstance.removePets()
        // toyInstance.createPet()


        // find a user and include all of their pets and all of their pet's toys
        const user = await db.user.findByPk(2, {
            include: [{
                // define the model to include
                model: db.pet,
                // define the relationship to the model
                include: [db.toy]
            }]
        })
        user.pets.forEach(pet => {
            pet.toys.forEach(toy => {
                console.log(`${user.firstName} has a ${pet.name} who has a ${toy.type}`)
            })
        })

        
    } catch (error) {
        console.log(error)
    }
}

toyCrud()