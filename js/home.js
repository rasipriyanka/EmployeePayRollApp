let empPayRollList;
let empGetData;
window.addEventListener("DOMContentLoaded",(Event)=>{
    createInnerHtml();
 empGetData=localStorage.getItem("empData") ? localStorage.getItem("empData") : [];
console.log(empGetData);
empPayRollList= getEmployeeFromServer();
console.log(empPayRollList);
})
const getEmployeeFromServer=()=>{
    makeServiceCall("GET",site_properites.home_page,true)
    .then(response=>{
        empPayRollList=JSON.parse(response)
        console.log(empPayRollList);
        processEmpDataResponse();
    })
    .catch(err=>{
        console.log("GET Error Status: "+JSON.stringify(err));
        // empPayRollList = [];
        processEmpDataResponse();
    })
  
}

const processEmpDataResponse = () => {
    document.querySelector(".emp-count").textContent = empPayRollList.length;
    createInnerHtml();
    // localStorage.removeItem("empEdit");
};

const createInnerHtml=()=>{
    if(empPayRollList.length==0)return;
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml=`${headerHtml}`;

    for(const empPayrollData of empPayRollList){
      innerHtml=`${innerHtml}
      <tr><td><img src="${empPayrollData._picture}" /></td>
      <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>Hr</td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
                <img id="${empPayrollData._name}" onclick="remove(this)" alt="delete" src="../assets/icons/bin.png">
                <img id="${empPayrollData._id}" alt="edit" onclick="update(${empPayrollData._id})" src="../assets/icons/draw.png">
            </td>
            </td>
      </tr>`
    }
    document.querySelector("#table-display").innerHTML=innerHtml;
    


}