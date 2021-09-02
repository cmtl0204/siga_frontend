import { User } from '../auth/user';
import { Catalogue } from '../app/catalogue';
import { Address } from '../app/address';
import { Course } from './course';
import { Skill } from './skill';
import { Language } from './language';
import { Reference } from './reference';
import { Experience } from './experience';


export interface Professional {
    id?: number;
    user?: User[];
    is_travel?: boolean;
    is_disability?: boolean;
    is_familiar_disability?: boolean;
    identification_familiar_disability?: string;
    is_catastrophic_illness?: boolean;
    is_familiar_catastrophic_illness?: boolean;
    about_me?: string;
    address?: Address;
    sex?: Catalogue;
    gender?: Catalogue;
    nationality?: Catalogue;
    courses?: Course[];
    skills?: Skill[];
    languages?: Language[];
    references?: Reference[];
    experiences?: Experience[];
}