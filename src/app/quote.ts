export class Quote {
    public showInfo: boolean;
    constructor(public id:number,public name:string,public title:string,public quote:string,public author:string, public datePosted: Date,public likes:number, public dislikes:number){
        this.showInfo=false;
    }
}