const profileDataArgs = process.argv.slice(2);
// console.log(profileDataArgs);

//this doesnt give any errors
// const animalArray = ['dog', 'cat', 'pig'];
// animalArray.push('cow');

// const personObj = {
//     name: 'Praise',
//     age: 27
// };

// personObj.age = 100;
// personObj.occupation = 'Developer';

//this gives errors
// const message = 'Hello Node!';
// message = 'Goodbye Node!';

// const sum = 5 + 3;
// sum += 1;

const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.lenght; i += 1) {
        console.log(profileDataArr[i]);
    }

    console.log('================');

    //is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);