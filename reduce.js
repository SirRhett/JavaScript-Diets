/*

                                REDUCE METHOD EXPLAINED BY GOING ON A DIET

    The reduce method in JavaScript gives you a simple way to take an array of values and combine them into one value, or 
    sum the array based on multiple category. Reduce methods combine elements from an initial array into a final 
    value or array of values.

    From very simple methods like calorie counting, to more complicated diets like Atkins or WeightWatchers, the goal is 
    to distill all the food that you might eat over the course of the day into one value (or values) to see if 
    you are on track to lose weight

    Let’s say that you have an array with the calorie counts of 5 separate foods that you have eaten over the course of the day. 
    You want to figure out how many total calories you have consumed. Here’s the code For Loop:
*/
                    let calories = [800, 200, 100, 300, 700];
                    let total = 0;

                    for (let i = 0; i< foods.length; i++){
                    total += calories[i];
                    }
                    //value of total will be 2100
/*
    Reduce is an array method so we will start with the array of calorie counts.
    It uses a callback function that runs on each element in the array.
    It uses a return statement to show how the value should accumulate after each iteration of the array.
*/
                    let foods = [800, 200, 100, 300, 700];
                    let total = foods.reduce(function(sum, item){
                    return sum + item;
                    });
/*
    So, reduce has some concept of memory. As you go through each item in the array, the values are being tracked in the sum argument. 
    In our previous example, we had to declare a new variable outside the scope of the loop to “remember” the values. when you 
    (or another developer) need to scan hundreds of lines of code, reduce will give you a quick hint about the purpose of the code block.



                                                USING OBJECTS

    We have just been looking at one-dimensional arrays thus far. But, if you can iterate through an array full of numbers, you can also iterate 
    through an array full of objects. Let’s add a name to each element so we can figure out what we are actually eating over the course of the day.
*/
                    let foods = [
                    {name: 'steak', calories: 800},
                    {name: 'fruit', calories: 200},
                    {name: 'salad', calories: 100},
                    {name: 'chips', calories: 300},
                    {name: 'ice cream', calories: 700},
                    ];
                    let total = foods.reduce(function(sum, item){
                    return sum + item.calories;
                    }, 0)
                    //value of total will be 2100
/*
    You ate a steak for breakfast… with some fruit… then some salad and chips for lunch… then finally ice cream for dinner. That’s a heck of a day.

    Hopefully, you can see the flow as we go through the array. As we go through each element, the sum grows to represent the total calories consumed 
    over the day. The entire point is to put these values into one big bucket- the number of calories over the day.



                                            USING MULTIPLE CATEGORIES

    So if it is all about calories, why the heck are there so many different diets? I am not going to wade into the nutrition science, but here’s the 
    general summary- there is plenty of disagreement over the “best” way to lose weight. Some encourage you to just count calories, while others will 
    look at protein, carbs, fat and any other number of factors.

    Let’s imagine for a moment that you want to change the code so that you can evaluate your diet based on any common dieting system. You will need to track 
    carbs and fat for each type of food. Then you will need to summarize it all at the end so you can figure out how many grams you consumed in each category. 
    Here is our foods object with fake nutritional values.
*/
                    let foods = [
                    {name: 'steak', calories: 800, carbs: 10, fat: 30},
                    {name: 'fruit', calories: 200, carbs: 20, fat: 0},
                    {name: 'salad', calories: 100, carbs: 0, fat: 5},
                    {name: 'chips', calories: 300, carbs: 10, fat: 10},
                    {name: 'ice cream', calories: 700, carbs: 20, fat: 20},
                    ];
/*
    Now, we need to run the reduce() method. But, it can’t all be tracked in one value. We want to keep our categories. So, our accumulator needs to be an object 
    with the same categories as the array.

    As you go through each item, you will change the value of a specific property within an object. If that object does not yet have a property with the correct 
    name, you will create it. Here is the code.
*/
                    let total = foods.reduce(function (buckets, item) {
                    let calories = item.calories;
                    let carbs = item.carbs;
                    let fat = item.fat;
                    buckets['calories'] += calories;
                    buckets['carbs'] += carbs;
                    buckets['fat'] += fat;

                    return buckets;
                    });
                    /*total object is
                    {calories: 2100, carbs: 60, fat:65}

    We are using buckets as an object to categorize the values based on name of their property. We use the += operator to add to the appropriate bucket for each 
    value within the object originally from the foods array. Notice how we don’t store the name? That is because it is insignificant- we just want the numbers so 
    we can analyze the success of your diet for the day.

    As you can see, there was one issue in our output. We have a name field that is set to ‘steak’. We don’t want to store the name! So, we need to specify 
    another argument- the initial value.

    This argument comes after the callback, and we want to initialize the calories, carbs and fat field to 0, so that our reduce method knows that those are the 
    only three key/value pairs we will be using for the buckets argument. You can see an example here.
*/
                    let total = foods.reduce(function (buckets, item) {
                    let calories = item.calories;
                    let carbs = item.carbs;
                    let fat = item.fat;
                    buckets['calories'] += calories;
                    buckets['carbs'] += carbs;
                    buckets['fat'] += fat;
                    return buckets;
                    },
                    {calories: 0, carbs: 0, fat:0}
                    );
                    /*total object is
                    {calories: 2100, carbs: 60, fat:65}
*/
