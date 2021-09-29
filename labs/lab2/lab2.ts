import {worker, Category} from "./InterfaceWorker";

import {PrizeLogger} from "./InterfacePrizeLogger";


import {Author, Librarian} from "./InterfacePerson";

import {UniversityLibrarian} from "./UniversityLibrarian";
import {ReferenceItem} from "./ReferenceItem";






function getAllworkers(): worker[] {

    return [
        {id: 0, Category: Category[0], Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000},
        {id: 1, Category: Category[0], Name: 'Petro', surname: 'Petrov', available: true, salary: 1500},
        {id: 2, Category: Category[0], Name: 'Vasyl', surname: 'Vasyliev', available: true, salary: 1500},
        {id: 3, Category: Category[0], Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1500}


    ];

}

function createCustomer(name: string, age?: number, city?: string) {
    if (age == undefined && city == undefined) {
        console.log(name)
    } else if (age == undefined) {
        console.log(name + " " + city)
    } else if (city == undefined) {
        console.log(name + " " + age)
    } else {
        console.log(name + " " + age + " " + city)
    }


}

function PrintWorker(worker: worker) {
    console.log( worker.Name + worker.surname + "got salary" + worker.salary )
}

function getWorkerByID(id: number, worker: { Name: string, surname: string, available: boolean, salary: number, category: string, id: number } | worker): string {
    if (worker.id == id) {
        return worker.Name + " " + worker.surname + " " + worker.salary
    }
    return null
}

function getWorkersNamesByCategory(category = Category[2]) {
    console.log("1.2");
    let worker = getAllworkers()
    for (let item of worker) {
        if (item.Category == category) {
            logWorkersNames(item.Name + "  " + item.surname);
        }
    }
}

function logWorkersNames(data) {
    console.log(data);
}

interface workers {
    length: number;
    Name: string;
    surname: string;
    available: boolean;
    salary: number;
}

function createCustomerID(nameZam: string, id: number): string {
    let myID = nameZam + " " + id

    return myID
}

function logFirstAvailable(worker) {
    console.log("1.1")
    const some = worker as workers;
    console.log("кількість робітників в масиві=" + some.length);
    for (let item of worker) {
        if (item.available == true) {
            console.log(item.Name + "  " + item.surname);
        }
    }

}


function Main() {
    getAllworkers().forEach(some =>{
      let worker = getWorkerByID(2,some)
        if (worker != null){
            console.log(worker)
        }
    })
    console.log("----")

    getAllworkers().forEach(some =>PrintWorker(some))
    console.log("2.2")
    let logPrice: PrizeLogger = function (str): void {
        console.log(str)
    }
    logPrice("999")

    console.log("2.3")


    let favoriteAuthor: Author = {
        name: "Egor",
        email: "egor_for_youtube@gmail.com",
        numBooksPublished: 45
    }
    let favoriteLibrarian: Librarian = {
        name: "Leo",
        email: "LEO_f@gmail.com",
        department: "ДЕТСКАЯ БИБЛИОТЕКА БФ №10",
        assistCustomer(custName: string): void {
            console.log(custName)
        }
    }

    console.log(favoriteAuthor)
    console.log(favoriteLibrarian)

    console.log("2.4")


    let favoriteLibrarian_U: Librarian = new UniversityLibrarian("User", "User@gmail.com", "Наукова бібліотека")
    favoriteLibrarian_U.assistCustomer("Cust")
    console.log(favoriteLibrarian_U)

    console.log("2.5")

    let Reference: ReferenceItem = new ReferenceItem("Some text ", 2021)
    Reference.printItem()
    Reference.publisher = "Publisher"
    console.log(Reference.publisher)
}

Main();
