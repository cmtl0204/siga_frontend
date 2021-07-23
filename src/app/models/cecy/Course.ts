import { Catalogue } from "../app/catalogue";
import { Status } from "../app/status";
import { Planification } from "./Planification";

export interface Course {
    id?: number;
    status: Status;
    name: string;
    setec_name: string;
    summary: string;
    objective: string;
    observation: string;
}
