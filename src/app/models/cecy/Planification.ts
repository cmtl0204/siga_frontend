import { User } from '../auth/user';
import {Course} from './Course';

export interface Planification {

    course_id?: number;
    id?: number;
    user: User;
    course: Course;
    date_start: string;
    date_end: string;
    status_id: number;
    capacity: number;
}

export interface DetailPlanification {

    course_id?: number;
    id?: number;
    course: Course;
    date_start: string;
    date_end: string;
    state_id: number;
    capacity: number;
    need_date: string;
}
