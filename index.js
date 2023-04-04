// import the models directory and mount on a db variable
const db = require('./models')

// db queires are asycronous, so we use async/await (.then also works)
const userCrud = async () => {
    try {
        // // CREATE 
        // const newUser = await db.user.create({
        //     firstName: 'Gabe',
        //     lastName: 'Gangoso',
        //     age: 27,
        //     email: 'gabe@coolGabe.com'
        // })

        // console.log(newUser.firstName)
        // READ
        // findAll = SELECT * FROM users;
        // const everyone = await db.user.findAll()
        // everyone.forEach(user => {
        //     console.log(user.firstName)
        // })
        // const westons = await db.user.findAll({
        //     where: {
        //         firstName: "Weston"
        //     }
        // })
        // console.log(westons)

        // sequelize finders 
        // findOne() -- finds one entry
        // findByPk() -- finds by pk
        // findOrCreate() -- only creates if it doesn't exist already
        // const gabe = await db.user.findOne({
        //     where: {
        //         firstName: 'Gabe'
        //     }
        // })

        // console.log(gabe.lastName)
        // const pkUser = await db.user.findByPk(0)
        // findOrCreate returns an array [user, boolean]
        const [user, wasCreated] = await db.user.findOrCreate({
            // where clause is what it will search for
            where: {
                firstName: 'April'
            },
            // defaults: anything not in the where clause to use in case of creation
            defaults: {
                lastName: 'Gonzales',
                age: 30,
                email: 'april@ga.com'
            }
        }) 
        console.log('username: ' + user.firstName)
        console.log(wasCreated ? 'april was created' : 'april was found')
        // UPDATE 
        // returns number of rows changed
        // update({ what to change }, { where: { what to search } })
        const numRowsChanged = await db.user.update({ lastName: 'taco' }, {
            where: {
                firstName: 'Weston'
            }
        })

        // DESTROY
        const numRowsDestroyed = await db.user.destroy({
            where: {
                lastName: 'taco'
            }
        })
    } catch(err) {
        console.log(err)
    }
}

userCrud()