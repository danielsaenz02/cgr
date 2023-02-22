export interface Complaint {
    id: String,
    facts: string,
    dateEvents: string,
    dateEvents_des : string,
    municipality?: string,
    people_involved: string,
    entidad?: string,
    name_othr_entity: string
    email_user: string
    verification_code:string
    status: string
}
