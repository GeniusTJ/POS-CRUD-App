const express = require('express');
const router = express.Router();
const BreakfastItem = require('./breakfast');
const LunchItem = require('./lunch');
const DinnerItem = require('./dinner');
const DrinksItem = require('./drinks');
const DessertsItem = require('./desserts');
const SoupsItem = require('./soups');

router.get('/:foodType',async function(req, res ) {
  const { foodType } = req.params; // Retrieve the foodType parameter from the request URL
  
  if (foodType === 'breakfast') {
    await BreakfastItem.find()
      .then((items) => {
        res.status(200).json(items);
      })
      .catch((error) => {
        console.error('Failed to fetch breakfast items:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  } else if (foodType === 'lunch') {
    await LunchItem.find()
      .then((items) => {
        res.status(200).json(items);
      })
      .catch((error) => {
        console.error('Failed to fetch lunch items:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  } else if (foodType === 'dinner') {
    await DinnerItem.find()
      .then((items) => {
        res.status(200).json(items);
      })
      .catch((error) => {
        console.error('Failed to fetch dinner items:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  } else {
    res.status(400).json({ error: 'Invalid food type' });
  }
});


//Retrieve all breakfast items
// router.get('/breakfast', function(req, res) {
//     BreakfastItem.find()
//       .then((items) => {
//         res.status(200).json(items);
//       })
//       .catch((error) => {
//         console.error('Failed to fetch breakfast items:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//       });
//   });

  // POST /api/breakfast - Create a new breakfast item
router.post('/breakfast', function(req, res) {
    const { name,price } = req.body;
  
    const newBreakfastItem = new BreakfastItem({
      name,
      price
    });
  
    newBreakfastItem.save()
      .then(() => {
        res.status(201).json(newBreakfastItem);
      })
      .catch((error) => {
        console.error('Failed to save breakfast item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });

  router.put('/breakfast', function(req, res) {
    const { _id, name, price } = req.body;
  
    BreakfastItem.findByIdAndUpdate(_id, { name, price }, { new: true })
      .then((updatedItem) => {
        if (!updatedItem) {
          return res.status(404).json({ error: 'Breakfast item not found' });
        }
        res.status(200).json(updatedItem);
      })
      .catch((error) => {
        console.error('Failed to update breakfast item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });
  
  
  router.delete('/breakfast', function(req, res) {
    const { _id } = req.body;
  
    BreakfastItem.findByIdAndDelete(_id)
      .then((deletedItem) => {
        if (!deletedItem) {
          return res.status(404).json({ error: 'Breakfast item not found' });
        }
        res.status(200).json({ message: 'Breakfast item deleted successfully' });
      })
      .catch((error) => {
        console.error('Failed to delete breakfast item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });

//------------------------Lunch---------------------------------
  //Retrieve all lunch items
router.get('/lunch', function(req, res) {
    LunchItem.find()
      .then((items) => {
        res.status(200).json(items);
      })
      .catch((error) => {
        console.error('Failed to fetch breakfast items:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });

  router.post('/lunch', function(req, res) {
    const { name, price } = req.body;
  
    const newLunchItem = new LunchItem({
      name,
      price
    });
  
    newLunchItem.save()
      .then(() => {
        res.status(201).json(newLunchItem);
      })
      .catch((error) => {
        console.error('Failed to save lunch item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });
  
  router.put('/lunch', function(req, res) {
    const { _id, name, price } = req.body;
  
   LunchItem.findByIdAndUpdate(_id, { name, price }, { new: true })
      .then((updatedItem) => {
        if (!updatedItem) {
          return res.status(404).json({ error: 'Lunch item not found' });
        }
        res.status(200).json(updatedItem);
      })
      .catch((error) => {
        console.error('Failed to update lunch item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });
  
  
  router.delete('/lunch', function(req, res) {
    const { _id } = req.body;
  
   LunchItem.findByIdAndDelete(_id)
      .then((deletedItem) => {
        if (!deletedItem) {
          return res.status(404).json({ error: 'Lunch item not found' });
        }
        res.status(200).json({ message: 'Lunch item deleted successfully' });
      })
      .catch((error) => {
        console.error('Failed to delete lunch item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });


  module.exports = router;
  //------------------------Dinner---------------------------------

  //Retrieve all dinner items

  router.get('/dinner',function(req,res){
    DinnerItem.find()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((error)=>{
      console.error('Failed to fetch dinner items:',error);
      res.status(500).json({error:'Internal Server Error'});
    });
  });

  //Create a new dinner item

  router.post('/dinner',function(req,res){
    const {name,price} = req.body;

    const newDinnerItem = new DinnerItem({
      name,
      price
    });
    newDinnerItem.save()
    .then(()=>{
      res.status(201).json(newDinnerItem);
    })
    .catch((error)=>{
      console.error('Failed to save dinner item:',error);
      res.status(500).json({error: 'Internal Server Error'});
    });
  });

   //Update dinner item

   router.put('/dinner',function(req,res){
    const {_id, name, price} =req.body;

    DinnerItem.findByIdAndUpdate(_id,{_id, name, price},{new:true})
    .then((updatedItem)=>{
      if(!updatedItem){
        return res.status(404).json({error:'Dinner item not found'});
      }
      res.status(200).json(updatedItem);
    })
    .catch((error)=>{
      console.error('Failed to update dinner item:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
   });

   //Update dinner item

   router.delete('/dinner', function(req, res) {
    const { _id } = req.body;
  
    DinnerItem.findByIdAndDelete(_id)
      .then((deletedItem) => {
        if (!deletedItem) {
          return res.status(404).json({ error: 'Dinner item not found' });
        }
        res.status(200).json({ message: 'Dinner item deleted successfully' });
      })
      .catch((error) => {
        console.error('Failed to delete dinner item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });

   //------------------------Drinks---------------------------------

  //Retrieve all drinks items

  router.get('/drinks',function(req,res){
    DrinksItem.find()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((error)=>{
      console.error('Failed to fetch drinks items:',error);
      res.status(500).json({error:'Internal Server Error'});
    });
  });

  //Create a new drinks item

  router.post('/drinks',function(req,res){
    const {name,price} = req.body;

    const newDrinksItem = new DrinksItem({
      name,
      price
    });
    newDrinksItem.save()
    .then(()=>{
      res.status(201).json(newDrinksItem);
    })
    .catch((error)=>{
      console.error('Failed to save drinks item:',error);
      res.status(500).json({error: 'Internal Server Error'});
    });
  });

   //Update dinner item

   router.put('/drinks',function(req,res){
    const {_id, name, price} =req.body;

    DrinksItem.findByIdAndUpdate(_id,{_id, name, price},{new:true})
    .then((updatedItem)=>{
      if(!updatedItem){
        return res.status(404).json({error:'Drinks item not found'});
      }
      res.status(200).json(updatedItem);
    })
    .catch((error)=>{
      console.error('Failed to update drinks item:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
   });

   //Update dinner item

   router.delete('/drinks', function(req, res) {
    const { _id } = req.body;
  
    DrinksItem.findByIdAndDelete(_id)
      .then((deletedItem) => {
        if (!deletedItem) {
          return res.status(404).json({ error: 'Dinner item not found' });
        }
        res.status(200).json({ message: 'Dinner item deleted successfully' });
      })
      .catch((error) => {
        console.error('Failed to delete dinner item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });

   //------------------------Desserts---------------------------------

  //Retrieve all Desserts items

  router.get('/desserts',function(req,res){
    DessertsItem.find()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((error)=>{
      console.error('Failed to fetch Desserts items:',error);
      res.status(500).json({error:'Internal Server Error'});
    });
  });

  //Create a new drinks item

  router.post('/desserts',function(req,res){
    const {name,price} = req.body;

    const newDessertsItem = new DessertsItem({
      name,
      price
    });
    newDessertsItem.save()
    .then(()=>{
      res.status(201).json(newDessertsItem);
    })
    .catch((error)=>{
      console.error('Failed to save Desserts item:',error);
      res.status(500).json({error: 'Internal Server Error'});
    });
  });

   //Update Desserts item

   router.put('/desserts',function(req,res){
    const {_id, name, price} =req.body;

    DessertsItem.findByIdAndUpdate(_id,{_id, name, price},{new:true})
    .then((updatedItem)=>{
      if(!updatedItem){
        return res.status(404).json({error:'Desserts item not found'});
      }
      res.status(200).json(updatedItem);
    })
    .catch((error)=>{
      console.error('Failed to update Desserts item:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
   });

   //Update Desserts item

   router.delete('/desserts', function(req, res) {
    const { _id } = req.body;
  
    DrinksItem.findByIdAndDelete(_id)
      .then((deletedItem) => {
        if (!deletedItem) {
          return res.status(404).json({ error: 'Desserts item not found' });
        }
        res.status(200).json({ message: 'Desserts item deleted successfully' });
      })
      .catch((error) => {
        console.error('Failed to delete desserts item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });

  //------------------------Drinks---------------------------------

  //Retrieve all drinks items

  router.get('/drinks',function(req,res){
    DrinksItem.find()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((error)=>{
      console.error('Failed to fetch drinks items:',error);
      res.status(500).json({error:'Internal Server Error'});
    });
  });

  //Create a new drinks item

  router.post('/drinks',function(req,res){
    const {name,price} = req.body;

    const newDrinksItem = new DrinksItem({
      name,
      price
    });
    newDrinksItem.save()
    .then(()=>{
      res.status(201).json(newDrinksItem);
    })
    .catch((error)=>{
      console.error('Failed to save drinks item:',error);
      res.status(500).json({error: 'Internal Server Error'});
    });
  });

   //Update dinner item

   router.put('/drinks',function(req,res){
    const {_id, name, price} =req.body;

    DrinksItem.findByIdAndUpdate(_id,{_id, name, price},{new:true})
    .then((updatedItem)=>{
      if(!updatedItem){
        return res.status(404).json({error:'Drinks item not found'});
      }
      res.status(200).json(updatedItem);
    })
    .catch((error)=>{
      console.error('Failed to update drinks item:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
   });

   //Delete dinner item

   router.delete('/drinks', function(req, res) {
    const { _id } = req.body;
  
    DrinksItem.findByIdAndDelete(_id)
      .then((deletedItem) => {
        if (!deletedItem) {
          return res.status(404).json({ error: 'Dinner item not found' });
        }
        res.status(200).json({ message: 'Dinner item deleted successfully' });
      })
      .catch((error) => {
        console.error('Failed to delete dinner item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });

   //------------------------Soups---------------------------------

  //Retrieve all Soups items

  router.get('/soups',function(req,res){
    SoupsItem.find()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((error)=>{
      console.error('Failed to fetch Soups items:',error);
      res.status(500).json({error:'Internal Server Error'});
    });
  });

  //Create a new Soups item

  router.post('/soups',function(req,res){
    const {name,price} = req.body;

    const newSoupsItem = new SoupsItem({
      name,
      price
    });
    newSoupsItem.save()
    .then(()=>{
      res.status(201).json(newSoupsItem);
    })
    .catch((error)=>{
      console.error('Failed to save soups item:',error);
      res.status(500).json({error: 'Internal Server Error'});
    });
  });

   //Update Soups item

   router.put('/soups',function(req,res){
    const {_id, name, price} =req.body;

    SoupsItem.findByIdAndUpdate(_id,{_id, name, price},{new:true})
    .then((updatedItem)=>{
      if(!updatedItem){
        return res.status(404).json({error:'Desserts item not found'});
      }
      res.status(200).json(updatedItem);
    })
    .catch((error)=>{
      console.error('Failed to update Desserts item:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
   });

   //Delete Soups item

   router.delete('/soups', function(req, res) {
    const { _id } = req.body;
  
    SoupsItem.findByIdAndDelete(_id)
      .then((deletedItem) => {
        if (!deletedItem) {
          return res.status(404).json({ error: 'Soups item not found' });
        }
        res.status(200).json({ message: 'Soups item deleted successfully' });
      })
      .catch((error) => {
        console.error('Failed to delete Soups item:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });