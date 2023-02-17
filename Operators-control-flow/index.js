// question 3
let Science = 'Physics, Chemistry, Biology, Technical Drawing' 
let SocialScience = 'Accounting, Commerce, Marketing, Geography'
let Arts = 'Government, Economics, Literature, History'
let GeneralSubjects = 'English, Mathematics'

let Dept = Arts

if (Dept = Science){
    console.log("Here are the subjects for science: " + Science + " " + GeneralSubjects)
} else if (Dept = SocialScience){
    console.log("Here are the subjects for social science: " + SocialScience + " " +  GeneralSubjects)
}
else if (Dept = Arts){
    console.log("Here are the subjects for Arts: " + Arts + " " +  GeneralSubjects)
}
else {
    console.log(GeneralSubjects)
}



// Question 4

for (let i = 1; i < 20; i +=7 ){
    console.log(i)
}

//the result will be 15


// question 5

let Num = 12;
2 ** 2;
2 ** 3;
2 ** 4;

let Pwr = 2 ** 3;
console.log("The number " + Pwr + " is the power of 2 nearest tp " + Num )

