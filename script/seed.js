const db = require('../server/db')
const {
  User,
  Item,
  UserItem
} = require('../server/db/models')

async function seed() {
  await db.sync({
    force: true
  })
  console.log('db synced!')

  const items = await Promise.all([
    Item.create({
      name: 'Peach',
      points: 1,
      threeJS: 'https://www.cgtrader.com/free-3d-models/food/fruit/apricot-lowpoly'
    }),
    Item.create({
      name: 'Apple',
      points: 14,
      threeJS: 'https://www.cgtrader.com/free-3d-print-models/art/scans-replicas/red-apple--3'
    }),
    Item.create({
      name: 'Strawberry',
      points: 98,
      threeJS: 'https://www.cgtrader.com/free-3d-models/food/fruit/strawberry-e58fc22b7ea3c5bc232d0c2229c6971c'
    }),
    Item.create({
      name: 'Plum',
      points: 45,
      threeJS: 'https://www.cgtrader.com/free-3d-models/food/fruit/ameixa-plum-85k'
    }),
    Item.create({
      name: 'Pear',
      points: 54,
      threeJS: 'https://www.cgtrader.com/free-3d-models/food/fruit/pea-5fd5f53a-f6e1-48df-9e15-7f762044f0ae'
    }),
    Item.create({
      name: 'Kiwi',
      points: 80,
      threeJS: 'https://www.cgtrader.com/free-3d-models/food/fruit/kiwi-fruit-689f61f9-2f0b-465c-a929-fee05bd933aa'
    }),
    Item.create({
      name: 'Pineapple',
      points: 7,
      threeJS: 'https://www.cgtrader.com/free-3d-models/food/fruit/pineapple-c52ea62d728247f7e12f1adb6a8cd212'
    })
  ])

  console.log(`seeded ${items.length} items`)

  const users = await Promise.all([
    User.create({
      userName: 'BigSean',
      email: 'cody@email.com',
      password: '123'
    }),
    User.create({
      userName: 'MurphyLee',
      email: 'murphy@email.com',
      password: '123'
    }),
    User.create({
      userName: 'EetaiMagic',
      email: 'eetai@email.com',
      password: '123'
    }),
    User.create({
      userName: 'RobinCello',
      email: 'robin@email.com',
      password: '123'
    }),
    User.create({
      userName: 'AbelCheese',
      email: 'abel@email.com',
      password: '123'
    }),
    User.create({
      userName: 'VanessaCoffee',
      email: 'vanessa@email.com',
      password: '123'
    }),
    User.create({
      userName: 'JacquesGreene',
      email: 'jacque@email.com',
      password: '123'
    }),
    User.create({
      userName: 'Diana28',
      email: 'diana@email.com',
      password: '123'
    }),
    User.create({
      userName: 'Daniela52',
      email: 'daniela@email.com',
      password: '123'
    }),
    User.create({
      userName: 'Allen83',
      email: 'allen@email.com',
      password: '123'
    })
  ])

  console.log(`seeded ${users.length} users`)

  const userItems = await Promise.all([
    UserItem.update({
      latitude: 40.704761,
      longitude: -74.009133
    },
      {
      where: {
        id : 1
      }
    }),
    UserItem.update({
      latitude: 40.704966,
      longitude: -74.009491
    },
      {
        where: {
          id: 2
        }
      }),
    UserItem.update({
      latitude: 40.704572,
      longitude: -74.009200
    },
      {
        where: {
          id: 3
        }
      }),
    UserItem.update({
      latitude: 40.704392,
      longitude: -74.009090
    },
      {
        where: {
          id: 4
        }
      }),
    UserItem.update({
      latitude: 40.704132,
      longitude: -74.009255
    },
      {
        where: {
          id: 5
        }
      }),
    UserItem.update({
      latitude: 40.704299,
      longitude: -74.009122
    },
      {
        where: {
          id: 6
        }
      }),
    UserItem.update({
      latitude: 40.704951,
      longitude: -74.009132
    },
      {
        where: {
          id: 7
        }
      })
    ,
    UserItem.update({
      latitude: 40.7419971,
      longitude: -73.9246365
    },
      {
        where: {
          id: 8
        }
      })
    ,
    UserItem.update({
      latitude: 40.7419472,
      longitude: -73.9246539
    },
      {
        where: {
          id: 9
        }
      })
    ,
    UserItem.update({
      latitude: 40.7411973,
      longitude: -73.9243364
    },
      {
        where: {
          id: 10
        }
      })
    ,
    UserItem.update({
      latitude: 40.7419972,
      longitude: -73.9246364
    },
      {
        where: {
          id: 11
        }
      })
  ])

  console.log(`updated ${userItems.length} user items`)

}



seed()
  .then(() => {
    console.log('closing db connection')
    return db.close()
    console.log('db connection closed')
  })
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
