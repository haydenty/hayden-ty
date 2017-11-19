declare const appConstants: {
        appName:string,
        crudApi: string
}
declare interface Blog {
    _id:number,
    title1:string,
    title2:string,
    body:string,
    imgSrc:string,
    imgText:string,
    continueReadingLink:string,
    publishedDate:Date
}