/* 

                            FILTER FUNCTION EXPLAINED BY APPLYING TO COLLEGE

    You input an array, and you filter out the elements that fulfill a specific condition into a new array.
    The method take all the elements in an initial array, and only allow certain elements into a final array.

    Think like functions are kind of like a college admissions officer. They use a set of parameters to decide 
    which students should be admitted to their particular college. Most still have hard numbers around SAT, ACT 
    and GPA scores that determine who will be considered.

        
                            USING A FOR LOOP INSTEAD OF FILTER FUNCTION

    Let’s say that we have an array of 4 students with names and GPAs. This particular college only wants 
    to admit students with a 3.2 GPA or higher. Here is how you might do that.
*/
                let students = [
                {
                    name: "david",
                    GPA: 3.3
                },
                {
                    name: "sheila",
                    GPA: 3.1
                },
                {
                    name: "Alonzo",
                    GPA: 3.65
                },
                {
                    name: "Mary",
                    GPA: 3.8
                }
                ]
                
                let admitted =[];
                
                for (let i=0; i <students.length; i++){
                if(students[i].gpa > 3.2)
                    admitted.push(students[i]);
                }
                
                /*admitted = [
                {
                    name: "david",
                    GPA: 3.3
                },
                {
                    name: "Alonzo",
                    GPA: 3.65
                },
                {
                    name: "Mary",
                    GPA: 3.8
                }
                ];

    If someone was reading over your code, they would need to track multiple arrays just to learn that you 
    were simply filtering one array into another. And, you need to carefully track i as you go in order to avoid 
    any bugs. Let’s learn how to use the filter method to accomplish the same thing.


                            USING FILTER() METHOD

    Let’s learn how to accomplish the same goal with the filter() method.

        *Filter is an array method, so we will start with the array of students.
        *It uses a callback function that runs on each element in the array.
        *It uses a return statement to show which elements will actually end up in the final array, 
            in this case, the admitted students.
*/    
                let students = [
                {
                    name: "david",
                    GPA: 3.3
                },
                {
                    name: "sheila",
                    GPA: 3.1
                },
                {
                    name: "Alonzo",
                    GPA: 3.65
                },
                {
                    name: "Mary",
                    GPA: 3.8
                }
                ]
                
                let admitted = students.filter(function(student){
                return student.gpa > 3.2;
                })
                
                /*admitted = [
                {
                    name: "david",
                    GPA: 3.3
                },
                {
                    name: "Alonzo",
                    GPA: 3.65
                },
                {
                    name: "Mary",
                    GPA: 3.8
                }
                ];*/

/*
    The inputs and outputs are the same, so here’s what we did differently:

    We didn’t need to declare the admitted array and then fill it later. We declared it and then filled it with 
    elements in the same code block
    We actually used a condition within the return statement! That means that we only return elements that pass a certain condition.
    We can now use student for each element in the array, rather than students[i] like we did in the for loop.

            
                                    USING TWO CONDITIONS WITHIN FILTER

    GPA and SAT scores. Students must have a GPA over 3.2 and an SAT score over 1900. Here is what the same function would look like.
*/
                let students = [
                {
                    name: "david",
                    GPA: 3.3,
                    SAT: 2000
                },
                {
                    name: "sheila",
                    GPA: 3.1,
                    SAT: 1600
                },
                {
                    name: "Alonzo",
                    GPA: 3.65,
                    SAT: 1700
                },
                {
                    name: "Mary",
                    GPA: 3.8,
                    SAT: 2100
                }
                ]
                
                let admitted = students.filter(function(student){
                return student.gpa > 3.2 && student.sat > 1900;
                })
                
                /*admitted = [
                {
                    name: "david",
                    GPA: 3.3,
                    SAT: 2000
                },
                {
                    name: "Mary",
                    GPA: 3.8,
                    SAT: 2100
                }
                ];*/