// Write your solution in this file!
const employee = {
    name : "Hope",
    streetAddress : "Nairobi",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {... obj};
    newObj[key] = value;
    return newObj;
}

const newEmployee = updateEmployeeWithKeyAndValue(employee,"name","Susan");



function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    employee[key] = value;
    return employee; 
}

destructivelyUpdateEmployeeWithKeyAndValue(employee,"name", "Ruth");

function deleteFromEmployeeByKey(obj,key) {
    const newEmp = {...obj};
    delete newEmp[key];

    return newEmp;    
}

deleteFromEmployeeByKey(employee,"streetAddress");

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];

    return obj;
}

destructivelyDeleteFromEmployeeByKey(employee,"name");