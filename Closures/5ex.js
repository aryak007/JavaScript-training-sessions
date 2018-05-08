function employeeIdInfo() {
    var employeeID = 123;
    return {
        getEmployeeId: function(){
            
          return employeeID;
        },
        setEmployeeId: function (newId){
            employeeID = newId;
        }
    }
}
var empObj = employeeIdInfo(); // At this juncture, the employeeID outer function has returned.
console.log(empObj.employeeID)
console.log("Emp Id is - "+empObj.getEmployeeId()); // 123
empObj.setEmployeeId(333); // Changes the outer function's variable
console.log("Emp Id is - "+empObj.getEmployeeId()); // 567: It returns the updated employeeID variable
