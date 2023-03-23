export interface Comapny {
    id: number,
    name: string,
    location: string,
    about_company: string,
    employer:string,
    vacancies: number,
    image:string
}
export interface ComapnyId {
    name: string,
    location: string,
    about_company: string,
    employer:string,
    company_website: string,
    image:string,
    occupation: string,
    values: [
        string
    ]
    vacancies: [
        {
            description: string,
            from_experience:number,
            from_salary:number,
            id: number,
            position: string,
            job_stack: [
                string
            ],
            job_type: [
                string
            ],
        }
    ]
}
export interface ILink {
    icon: string,
    title: string,
    link: string
}
export interface ILoginData {
    email: string,
    password: string,
}
export interface SignInData {
    data: {
        token: string
    }
}

export interface Vacansy {
    created_date: string,
    description:string,
    from_experience: number,
    from_salary: number
    position: string,
    to_experience: number,
    to_salary: number,
    job_stack: [
        string
    ],
    id: number
    job_type: [
        string
    ],
    company: {
        image: string,
        location: string,
        name:string,
    },
  

}

export interface VacansyId {
    company: {
        image: string,
        location: string,
        name:string,
        about_company: string,
        id: number
    },
    created_date: string,
    description:string,
    from_experience: number,
    from_salary: number
    position: string,
    to_experience: number,
    to_salary: number,
    expectation:string,
    id: number,
    soft_skill: [
        string
    ]
    job_type: [
        string
    ],
    will_be_plus: [
        string
    ],
    job_stack: [
        string
    ],
    job_benefits: [
        string
    ],
    responsibility: string,

}

export interface UserId {
    full_name: string
    position: string
    linkedIn: string
    telegram: string
    github: string
    phone_number: string
    email: string
    salary_expectation: number,
    experience_year: number,
    stacks: [
        string
    ]
    work_expectations: [
        string
    ],
    worked_companies: [
        {
            company:{
                name: string
                image: string
                occupation: string
            }
            start_date: string
            end_date: string
            responsibilities: string
            stacks: [
                string
            ]
        }
    ]
}

export interface FormInputGenerous {
    first_name: string;
    last_name: string;
    phone_number: string;
    salary_expectation: string;
    linkedIn: string;
    telegram: string;
    github: string;
    position: string;
    experience_year: string;
}

export interface FormInputAmbition {
    about_myself: 'string',
    achievement: 'string',
    expectation: 'string',
    stacks: [
        number
    ]
}

export interface FormInputExperience  {
    company:string,
    start_date: string,
    end_date: string,
    responsibilities: string,
    stacks: [
        number
    ]
}