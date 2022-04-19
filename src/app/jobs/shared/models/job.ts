export interface IResponseJobs<T> {
    "0-legal-notice": string;
    "job-count":      number;
    jobs:             Array<T>;
}

export interface IJob {
    id:                          number;
    url:                         string;
    title:                       string;
    company_name:                string;
    company_logo:                string;
    category:                    Category;
    tags:                        string[];
    job_type:                    JobType;
    publication_date:            Date;
    candidate_required_location: string;
    salary:                      string;
    description:                 string;
    company_logo_url?:           string;
}

export enum Category {
    AllOthers = "All others",
    Business = "Business",
    CustomerService = "Customer Service",
    Data = "Data",
    Design = "Design",
    DevOpsSysadmin = "DevOps / Sysadmin",
    FinanceLegal = "Finance / Legal",
    HumanResources = "Human Resources",
    Marketing = "Marketing",
    Product = "Product",
    QA = "QA",
    Sales = "Sales",
    SoftwareDevelopment = "Software Development",
    Writing = "Writing",
}

export enum JobType {
    Contract = "contract",
    Empty = "",
    Freelance = "freelance",
    FullTime = "full time",
    Internship = "internship",
    Other = "other",
    PartTime = "part-time",
}
