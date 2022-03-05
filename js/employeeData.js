class EmployeePayrollData{
    get id(){return this._id;}
    set id(id){this._id = id;}
    get name(){return this._name;}
    set name(name){
        if(name==null || name==''){
            textError.textContent="Please enter your name!";
        }
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(nameRegex.test(name)){
            this._name = name;
        }
        //else throw "Name is Incorrect";//in case of form tag
         return "Name is incorrect";
    }
    get picture(){return this._picture;}
    set picture(picture){this._picture = picture;}

    get salary(){return this._salary;}
    set salary(salary){ this._salary = salary;}

    get gender(){return this._gender;}
    set gender(gender){this._gender = gender;}

    get department(){return this._department;}
    set department(department){this._department = department;}

    get startDate(){return this._startDate;}
    set startDate(startDate){
        if(startDate <= new Date()){
            this._startDate = startDate;
        }
        else{
            return "Enter valid date";
        }
        //textError.textContent= "Enter valid date";
    }

    get note(){return this._note;}
    set note(note){this._note = note;}
    

    toString(){
        const options ={ year : "numeric", month : "long", day : "numeric"};
        const empDate = this.startDate === undefined ? "undefined" :
                       this.startDate.toLocaleDateString("en-US", options);
        return "id= "+ this.id+" name = "+ this.name + " picture= "+ this.picture+" gender = "+ this.gender +" department = "+ this.department + " salary = "+ this.salary+ " startDate= "+ this.startDate+ " note= "+ this.note;

    }
    isValid(){
        let error=false;
        error=this.startDate!='' || this.name!='';
        return error;
        console.log(this.startDate,this.name)
    }
}