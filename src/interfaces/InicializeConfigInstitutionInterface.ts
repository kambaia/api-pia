

export interface IClass extends Document {
	_id?: string;
   classMat?: string;
   createdAt: Date;
	updatedAt: Date;
   yaer?:string
}
export interface IGroup extends Document {
	_id?: string;
    group?: string;
    createdAt: Date;
    updatedAt: Date;
 }

 export interface IFee extends Document {
	_id?: string;
    fee?: string;
    createdAt: Date;
    updatedAt: Date;
 }

 export interface ICourse extends Document {
	_id?: string;
    couse?: string;
    createdAt: Date;
    updatedAt: Date;
 }
 
 export interface IDiscipline extends Document {
	_id?: string;
    discipline?: string;
    cigla: string;
    createdAt: Date;
    updatedAt: Date;
 }
