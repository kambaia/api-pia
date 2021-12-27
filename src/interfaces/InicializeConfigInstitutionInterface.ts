

export interface IClass extends Document {
   classMat?: string;
   createdAt: Date;
	updatedAt: Date;
   yaer?:string
}
export interface IGroup extends Document {
    group?: string;
    createdAt: Date;
    updatedAt: Date;
 }

 export interface IFee extends Document {
    fee?: string;
    createdAt: Date;
    updatedAt: Date;
 }

 export interface ICourse extends Document {
    couse?: string;
    createdAt: Date;
    updatedAt: Date;
 }
 
 export interface IDiscipline extends Document {
    discipline?: string;
    cigla: string;
    createdAt: Date;
    updatedAt: Date;
 }
