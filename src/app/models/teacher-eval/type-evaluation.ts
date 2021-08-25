import { Status } from "../app/status";
import { Teacher } from "../app/teacher";


export interface TypeEvaluation {
    id?: number,
    name: string,
    code: string,
    percentage: string,
    global_percentage: string,
    status? : Status
    
}

