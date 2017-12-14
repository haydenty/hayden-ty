declare const appConstants: {
        appName:string,
        crudApi: string,
        blogNames:any[]
}

declare interface Blog {
    _id:number,
    belongsToBlogName:string,
    title1:string,
    title2:string,
    body:string,
    imgSrc:string,
    imgText:string,
    continueReadingLink:string,
    publishedDate:Date
}