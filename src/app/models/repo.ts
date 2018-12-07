import {IUser} from './user'
export interface IRepo{

    id:number;
    name:string;
    full_name:string;
    owner:IUser;
}
export interface  IRepoResponse{
    total_count:number;
    incomplete_results:boolean;
    items:IRepo[];

}