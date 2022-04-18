var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var ingredients = [
    {
        "id":"123d",
        "text":"Milk"
    },
    {
        "id": "23re",
        "text": "Bacon"
    }
]

app.get('/', function(request, response){
    response.send('My first Api!!');
});

app.get('/ingredients', function(request, response){
    response.send(ingredients);
});

app.get('/funions', function(req,res){
    res.send('yo give me some funions foo.')
});

app.post('/ingredients', function(req,res){
    var ingredient = req.body;
    if(!ingredient || ingredient.text === "")
    {
        res.status(500).send({error: "Your ingredient must have tet"})
    }else{
        ingredients.push(ingredient);
        res.status(200).send(ingredient);
    }
});

app.put('/ingredients/:ingredientId', function(req, res){

   
    var newText = req.body.text;

    if((!newText || newText === ""))
    {
        res.status(500).send({error:"You must provide ingredient text"});
    }else{
        varObjectFound = false;
        for (var x = 0; x < ingredients.length; x++)
        {
            var ing = ingredients[x];

            if(ing.id === req.params.ingredientId)
            {
                ingredients[x].text = newText;
                break;
            }
        }

        if(!objectFound)
        {
            response.status(500).send({error: "Ingredient id not found"});
        }else{
            res.send(ingredients);
        }
       
    }
   
});

app.listen(3000, function(){
    console.log("first api running on port 3000!");
});

