const router = require('express').Router()
const { User, UserItem, Item } = require('../db/models')
module.exports = router


router.post('/', (req, res, next) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(next)
})

router.get('/', (req, res, next) => {
  if (req.query.limit) {
    User.findAll({ limit: req.query.limit, order: [['score', 'DESC']] })
      .then((topUsers) => res.json(topUsers))
      .catch(next)
  }
  User.findAll()
    .then(users => res.json(users))
    .catch(next)
})

router.get('/:userId', (req, res, next) => {
  User.findById(req.params.userId)
    .then(user => res.json(user))
    .catch(next)
})

router.put('/:userId', (req, res, next) => {
  User.update(req.body, {
    where: {
      id: req.params.userId
    }
  })
    .then(() => res.sendStatus(200))
    .catch(next)
})

router.delete('/:userId', (req, res, next) => {
  User.destroy({
    where: {
      id: req.params.userId
    }
  })
    .then(() => res.status(202).send('Deleted'))
    .catch(next)
})

// get all items for a user, or query to see if hidden (if not hidden, item is in satchel)

router.get('/:userId/items', (req, res, next) => {
  if (req.query.hidden) {
    User.findAll({
      where: {
        id: req.params.userId
      },
      include:[{model: Item}]
    })
      .then(allItems => allItems.filter(item => item.hidden.toString() === req.query.hidden))
      .then(selectedItems => res.json(selectedItems))
      .catch(next)
  } else {
    User.findAll({
      where: {
        id: req.params.userId
      },
      include:[{model: Item}]
    })
      .then(items => res.json(items))
      .catch(next)
  }
})



// update single item
router.put('/:userId/items/:itemId', (req, res, next) => {
  UserItem.update({
    longitude: req.body.longitude,
    latitude: req.body.latitude
  },
    {
    where: {
      id: req.params.itemId
    }
  })
    .then(() => res.sendStatus(200))
    .catch(next)
})

