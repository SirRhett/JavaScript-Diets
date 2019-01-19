/*

                                MAP() METHOD EXPLAINEED BY GOING ON A HIKE

    map() takes each element from an original array, transforms it with a function that you specify, and adds the result 
    to a new array in the same order. The method run a function on each element in an initial array before storing it in a final array.

    Let’s say that there is a popular mountain that everyone likes to climb, White Mountain. When each person hikes the 
    mountain, they undergo a distinct transformation. At the bottom, they are well-fed, hydrated and full of energy. 
    But by the time hikers get to the top, they are hungry, dehydrated and tired.

    It takes each element, modifies it in the way you specify, and adds the results to a 2nd array.


    Let’s say we have 5 hikers that are going to the top of White Mountain. To symbolize those 5 hikers, 
    we will use an array with 5 numbers to signify their energy levels (out of 100).
*/
                    let startHike= [95, 83, 92, 98, 94];
/*
    By the time these hikers get to the top of the mountain, 50% of their energy will be drained. 
    In code terms, this means we need to create another array to store their new energy levels.

    If we used a for loop, it would look like this:
*/
                    let startHike= [96, 84, 92, 98, 94];
                    let summit = [];
                    
                    for(let i=0;  i&lt <startHike.length; i++){
                    let hikerEenrgy=starthike[i];
                    
                    let halfEnergy= hikerEnergy/2
                    
                    summit.push(halfEnergy);
                    }
                    
                    //final result of summit: [48,42,46,49,47]
/*
    Instead, we can use the map() method to do all of this in three lines of code and half the number of variables.
*/
                    let startHike= [96, 84, 92, 98, 94];
                    
                    let summit = startHike.map(function(hikerEnergy){
                    
                    return hikerEnergy / 2;
                    
                    });
                    
                    //final result of summit: [48,42,46,49,47]
/*
    *startHike = our array that stores the energy levels of the 5 hikers at the start of the hike.

    *summit= the array that stores the energy levels when they reach the top of the mountain, which is the final product in this case.

    *.map() = the map method for arrays, which will iterate through each item in the startHike array.

    *function(hikerEnergy) = a callback that uses an argument, hikerEnergy, for each element in the startHike array

    *return = the item that is added to the summit array that corresponds to each element in the startHike array


                                     USING AN ARRAY FULL OF OBJECTS

    you usually will not be using a one dimensional array full of numbers. You will probably also encounter an array full of objects. 
    That is where the map() function becomes even more useful.

    Let’s assume you still have 5 hikers. Each one is symbolized by an object with a name and a hydration level, out of 100.
*/
                        let startHike= [
                    {name:"dave", water: 86},
                    {name:"andrea", water: 56},
                    {name:"maria", water: 42},
                    {name:"nico", water: 60},
                    {name:"will", water: 36},
                    ];
/*
    You want to remove all the names of these hikers so that you can run a scientific study on their hydration levels. So, your final array 
    needs to just have the starting water amount, and no name.

    In this case, the map() method will help us store the water value for each item
*/
                        let startHike= [
                    {name:"dave", water: 86},
                    {name:"andrea", water: 56},
                    {name:"maria", water: 42},
                    {name:"nico", water: 60},
                    {name:"will", water: 36},
                    ];
                    
                    let summit = startHike.map(function(hikerEnergy){
                    let waterLevel = hikerEnergy['water'];
                    return waterLevel;
                    });
                    
                    //final result of summit: [86, 56, 42, 60, 36]
/*
    We will just need to look at the one key/value pair, and move the value into a new array.
*/