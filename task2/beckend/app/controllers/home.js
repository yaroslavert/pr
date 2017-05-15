let express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  db.furniture.findAll().then(function (articles) {
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});

router.route('/furniture')
      .get((req,res)=>{
        db.furniture.findAll()
          .then((docs)=>{
            res.json(docs);
          })
          .catch((err)=>{
            new Error(err);
          })
      })
      .post((req,res)=>{
        let body = req.body;
        if(!body || !Object.keys(body).length){
          res.sendStatus(404);
          return;
        }
        db.furniture.create({
            numberHeadset:body.numberHeadset,
            name:body.name,
            typeFurniture:body.typeFurniture,
            countItems: +body.countItems,
            prise: parseFloat(body.prise),
            countStorage : body.countStorage,
            dateBuy : new Date()
        }).then(()=>{
          res.sendStatus(200);
        }).catch((err)=>{
          res.sendStatus(400);
        });
      })

router.route('/furniture/:id')
    .get((req,res)=>{
        db.furniture.findById(req.params.id)
            .then((doc)=>{
                if(!doc){
                    res.sendStatus(404);
                    return;
                }
                res.send(doc);
            })
            .catch((e)=>{
                new Error(e);
            })
    })
    .put((req,res)=>{
        let body = req.body;

        delete body['id'];

        db.furniture.findOne({
            where: { id : req.params.id }
        }).then(furn=>{
            return furn.updateAttributes(body)
        }).then(updated=>{
            res.send(updated);
        }).catch(e=>{
            new Error(e);
            res.sendStatus(404);
        });
    });

router.get('/furnitureSort',(req,res)=>{

    // ASC
    // DESC

    const REGEXP =  /[/"?]/g;

    let name = req.query.name;
    let sort = req.query.sort;
    let order = '';

    if(REGEXP.test(name) || REGEXP.test(sort)){
        res.sendStatus(400);
        return;
    }

    if(!sort && name){
        order = `${name}`;
    } else if(name && sort) {
        order = `${name} ${sort}`;
    } else if(!sort && !name){
        order = '';
    }

    db.furniture.findAll({order: order})
        .then((docs)=>{
            res.json(docs);
        })
        .catch(e=>{
            new Error(e);
            res.sendStatus(404);
        })
});

router.get('/furnitureFilter',(req,res)=>{

    const REGEXP =  /[/"?]/g;

    let key = req.query.key;
    let value = req.query.value;

    if(!key || !value || REGEXP.test(key) || REGEXP.test(value)){
        res.sendStatus(400);
        res.send([]);
        return;
    }

    let obj = {};
    obj[key]={
        $like : `%${value}%`
    };

    db.furniture.findAll({
        where:obj
    }).then((docs)=>{
        if(!docs.length){
            res.statusCode=206;
            res.json(docs);
            return;
        }
        res.json(docs);
    }).catch(e=>{
        new Error(e);
        res.sendStatus(404);
        res.send([]);
    })
});