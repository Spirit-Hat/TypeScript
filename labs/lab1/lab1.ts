function getAllworkers() {
    enum Category {
        BusinessAnalyst,
        Developer,
        Designer,
        QA,
        ScrumMaster
}
    let workers = [
        {id:0,Category:Category[0],Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000},
        {id:1,Category:Category[0],Name: 'Petro', surname: 'Petrov', available: true, salary: 1500},
        {id:2,Category:Category[0],Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600},
        {id:3,Category:Category[0],Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300}
    ] ;
    return workers;
}
function getWorkerByID (ID){
    getAllworkers().forEach(some => {
        if (some.id == ID)
            console.log(some.Name + "  " + some.surname +" " +some.salary);
    })
}
function getWorkersNamesByCategory (category) {
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
function  logFirstAvailable(worker){
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
    //logFirstAvailable(getAllworkers());
    getWorkersNamesByCategory('BusinessAnalyst');
//     getAllworkers().forEach(some => {
//         if (some.Category == 'Developer')
//     console.log(some.Name + "  " + some.surname)
//
// })
 //   getWorkerByID(3)
}
Main();
