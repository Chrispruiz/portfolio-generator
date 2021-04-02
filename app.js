var commandLineArgs = process.argv;
console.log(commandLineArgs);

const profileDataArgs = process.argv.slice(2, process.argv.length); 
console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArgs[i]);
    }
    console.log('==============');
    // Is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

console.log(profileDataArgs);
