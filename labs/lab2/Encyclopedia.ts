import {ReferenceItem} from "./ReferenceItem";

abstract class AbstractReferenceItem {
    // readonly title: string
    //
    // readonly year: number
    private _publisher: string


    // constructor(newTitle: string, newYear: number) {
    //     this.year = newYear
    //     this.title = newTitle
    //     console.log("'Creating a new ReferenceItem ...")
    // }

    constructor(public readonly title: string, protected readonly year: number) {
    }

    printItem(): void {
        console.log(`The ${this.title} was published in ${this.year}`)
    }

    printCitation(){
        return this.year
    }
    get publisher(): string {
        return this._publisher.toUpperCase()
    }

    set publisher(publisher: string) {
        this._publisher = publisher
    }
}

class Encyclopedia extends ReferenceItem{
    private _edition: string;

    constructor(title: string, year: number, edition: string) {
        super(title, year);
        this._edition = edition;
    }

    printItem() {
        super.printItem();
        console.log("Edition: edition"+ this.year)

    }
}
class EncyclopediaAbs extends AbstractReferenceItem{
    private _edition: string;

    constructor(title: string, year: number, edition: string) {
        super(title, year);
        this._edition = edition;
    }

    printItem() {
        super.printItem();
        console.log("Edition: edition"+ this.year)

    }
}
function main(){
    let refBook = new Encyclopedia("Encyclopedia of Dinosaurs", 2020, "The Sauropods")
    refBook.printItem()

    let refBooks = new EncyclopediaAbs("Encyclopedia of Dinosaurs", 2020, "The Sauropods")
    refBooks.printItem()

}
main()