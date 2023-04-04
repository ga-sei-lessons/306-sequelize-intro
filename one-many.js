const db = require('./models')

const petCrud = async () => {
    try {
        // find or create a user
        const [user, userCreated] = await db.user.findOrCreate({
            // where is what we search for
            where: {
                firstName: "Parvez"
            },
            // defualts is what to create with that is not in the where clause
            defaults: {
                lastName: "Jhim",
                age: 28,
                email: "parvez@email.com"
            }
        })

        // manually associate a pet during creation or with an update
        // find or create pet
        // [{ pet }, bool]
        const [loki] = await db.pet.findOrCreate({
            where: {
                name: "Loki"
            },
            defaults: {
                species: "Purebread Great Pironese",
                description: "Clifford the big red dog but white",
                // we can parvez's PK as loki's FK to indicate that he owns loki 
                userId: user.id
            }
        })

        // Foo.belongsTo(Bar)
        // fooInstance.getBar()
        // fooInstance.setBar()
        // fooInstance.createBar()


        console.log(await loki.getUser())
        // set loki's user
        const firstUser = await db.user.findOne() // first user found
        await loki.setUser(firstUser)
        const newOwner = await loki.getUser()
        console.log('loki\'s new owner is: ', newOwner.firstName)
        await loki.createUser({
            firstName: "Pao"
        }) //  create a new user that is associated with this pet instance

        // Foo.hasMany(Bar)

        // await firstUser.countPets()
        // await firstUser.getPets()
        // await firstUser.hasPet()
        // await firstUser.hasPets()
        // await firstUser.setPets()
        // await firstUser.addPet()
        // await firstUser.addPets()
        // await firstUser.removePet()
        // await firstUser.removePets()
        // await firstUser.createPet()
        // a user exists and we are going to create a pet for them
        // await firstUser.createPet({
        //     name: 'Link',
        //     species: 'Cat',
        //     description: 'Not detectable on Zoom'
        // })
        // we have a user, get their pets
        const gabePets = await firstUser.getPets()
        gabePets.forEach(pet => console.log(`${firstUser.firstName} owns ${pet.name}`))

        // 'eager loading' or 'includes'
        // aka -- how sequelize will do joins
        const allUsersAndPets = await db.user.findAll({
            // omit there where cluase, find everyone
            include: [db.pet] // an array of models to do a join with
        })
        // allUsersAndPets.forEach(user => {
        //     // console.log(user)
        //     user.pets.forEach(pet => {
        //         console.log(`${user.firstName} has ${pet.name}`)
        //     })
        // })
        const gabe = await db.user.findOne({
            where: {
                firstName: "Gabe"
            },
            include: [db.pet]
        })
        console.log(gabe.pets)

    } catch (error) {
        console.log(error)
    }
}

petCrud()