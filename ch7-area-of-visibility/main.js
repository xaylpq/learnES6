let user = { 
    name = 'Irena', 
    age = 25, 
};

function greet (user) { console.log(`Hello, ${user.name}!`); }
function getBirthYear(user){ return new Date().getFullYear()-user.age; }

