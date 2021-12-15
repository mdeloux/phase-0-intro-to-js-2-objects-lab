// Write your solution in this file!
const employee = {
    name: "Bill",
    streetAddress: "1234 Main St",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}
function deleteFromEmployeeByKey(employee, obj, key) {
    return {
        ...employee,
        [obj]: key,
    };
}
function destructivelyDeleteFromEmployeeByKey(employee, obj, key) {
    employee[obj] = key;
    return employee;
}