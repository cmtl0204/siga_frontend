import { Catalogue } from "../app/catalogue";
import { Status } from "../app/status";
import { Planification } from "./Planification";

export interface Course {
    id?: number;
    name?: string;
    hours_duration?:number;
    area?: any;
    level?:any;
    code?: any;
    status?:any;
    canton_dictate?:any;
    setec_name?:string;
    abbreviation?:string;
    capacitation_type?:any;
    course_type?:any;
    entity_certification_type?:any;
    person_proposal?:any;
    classroom?:any;
    specialty?:any;
    academic_period?:any;
    institution?:any;
    certified_type?:any;
    career?:any,
}