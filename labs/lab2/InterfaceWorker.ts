import {PrizeLogger} from "../Новая папка/PrizeLogger";

enum Category {
    BusinessAnalyst   ,
    Developer  ,
    Designer ,
    QA ,
    ScrumMaster
}

interface worker{
    id: number
    Name: string
    surname: string
    available: boolean
    salary: number
    Category: string
    markPrize?: PrizeLogger

}
export {worker, Category}
