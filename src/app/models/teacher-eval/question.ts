import { Catalogue } from "../app/catalogue";
import { Status } from "../app/status";
import { EvaluationType } from "./evaluation-type";



export interface Question{
    id: number;
    type_id?: Catalogue;     
    evaluationType? : EvaluationType;
    status_id?: Status;
    code: string;
    order: number;
    name: string;
    description: string;
    delete_at: null;
    create_at: string;
    update_at: string;
}
