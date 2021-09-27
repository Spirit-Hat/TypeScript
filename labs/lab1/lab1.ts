enum Category {
    BusinessAnalyst,
    Developer,
    Designer,
    QA,
    ScrumMaster
}
function getAllworkers() {

    let workers = [
        {id:0,Category:Category[0],Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000},
        {id:1,Category:Category[0],Name: 'Petro', surname: 'Petrov', available: true, salary: 1500},
        {id:2,Category:Category[0],Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600},
        {id:3,Category:Category[0],Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300}
    ] ;
    return workers;
}
function createCustomer(name :string, age?: number , city?: string){
    if(age ==undefined  && city ==undefined ){
       console.log(name)
    }else if (age ==undefined){
        console.log(name +" " + city)
    }else  if (city == undefined ) {
        console.log(name + " " + age)
    }
    else{
        console.log(name + " " + age + " " + city)
        }


}
function сheckoutWorkers (customer: string, workerIDs: number []){
    let workers = getAllworkers()
    let avalibleWorkersArray= []
    for (let i of workers){
        for (let j of workerIDs){
            if(i.id == j){
                if (i.available == true)
                    avalibleWorkersArray.push(getWorkerByID(j))
            }
        }
    }
    console.log(avalibleWorkersArray)
    console.log('Заказчики: ' + customer)
    return avalibleWorkersArray
}

function getWorkerByID (ID){
    let NameSurnameSalary = []
    getAllworkers().forEach(some => {
        if (some.id == ID)
            NameSurnameSalary.push(some.Name + ' ' + some.surname + ' ' + some.salary)
           // console.log(some.Name + "  " + some.surname +" " +some.salary);
    })
    return NameSurnameSalary
}
function getWorkersNamesByCategory (category = Category[2]) {
    console.log("1.2");
    let worker = getAllworkers()
    for (let item of worker ){
        if( item.Category == category){
            logWorkersNames(item.Name + "  " + item.surname);
        }
    }
}
function  logWorkersNames (data){
    console.log(data);
}
interface workers {
    length: number;
    Name: string;
    surname: string;
    available: boolean;
    salary: number;
}
function createCustomerID (nameZam: string, id: number): string{
    let myID = nameZam +" "+ id

    return myID
}
function  logFirstAvailable(worker){
    console.log("1.1")
     const some = worker as workers;
    console.log("кількість робітників в масиві=" + some.length);
    for (let item of worker ){
        if( item.available == true){
            console.log(item.Name + "  " + item.surname);
        }
    }
    // for(var i = 0 ; i <  some.length ; i++) {
    //     if( some[i].available == true){
    //         console.log(some[i].Name + "  " + some[i].surname);
    //     }
    //  }
    }


function Main() {
//     logFirstAvailable(getAllworkers());
//     //task 1.2
 //  getWorkersNamesByCategory('BusinessAnalyst');
//     //task 1.3
//     console.log("1.3")
//     getAllworkers().forEach(some => {
//         if (some.Category == 'Developer')
//     console.log(some.Name + "  " + some.surname)
//
// })
//    console.log(getWorkerByID(3))
//     console.log("1.4")
//     let myId = createCustomerID("Ann", 10)
//     console.log(myId)
//
//     let myCustumer = {name: "Ann", id: 10}
//     let IdGenerator = ({name, id}) => createCustomerID(name, id)
//     console.log(IdGenerator(myCustumer))
//     createCustomer('Andrey')
//     createCustomer('Andrey', 19)
//     createCustomer('Andrey', 19, 'Toronto')


    let myWorkers = сheckoutWorkers('ann', [ 1,2, 0])

    console.log(myWorkers.forEach(i => console.log('\t'+ i)));


}
Main();
