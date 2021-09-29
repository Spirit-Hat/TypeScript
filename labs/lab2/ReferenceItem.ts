class ReferenceItem {
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

    get publisher(): string {
        return this._publisher.toUpperCase()
    }

    set publisher(publisher: string) {
        this._publisher = publisher
    }
}
export{ReferenceItem}