var brand = ['Apply', 'Dell', 'Acer'];

console.log(brand);

var [apply, dell, acer] = ['Apply', 'Dell', 'Acer'];

console.log(apply);
console.log(dell);
console.log(acer);


// ------------------------------------------------------


var objPerson = {
    name: 'Luana',
    age: 19
}

var {name, age} = objPerson;

console.log(name + ' tem ' + age + ' anos de idade.');


// ------------------------------------------------------


var objFunctionary = {
    name2: 'Victor dos Santos',
    age2: 27,
    department: {
        cod_department: 01,
        name_department: 'computação'
    }
}

console.log(objFunctionary);

var {name2, age2, department: {cod_department, name_department}} = objFunctionary;

console.log(name2 + ', ' + age2 + ' anos: departamento ' + cod_department + ': ' + name_department);