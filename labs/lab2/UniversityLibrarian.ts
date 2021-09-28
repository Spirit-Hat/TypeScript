import {Librarian} from "./InterfacePerson";


class UniversityLibrarian implements Librarian{
    department: string;
    email: string;
    name: string;


    constructor(department: string, email: string, name: string) {
        this.department = department;
        this.email = email;
        this.name = name;
    }

    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}.`)

    }

}
export {UniversityLibrarian}