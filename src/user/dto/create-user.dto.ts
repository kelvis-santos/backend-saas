export class CreateUserDto {
    name?: string;
    email?: string;
    password?: string;
    created_at?: Date;
    updated_at?: Date;
    active?: boolean;
    firstname?: string;
    lastname?: string;
    birthdate?: Date;
    phone?: string;
    phone2?: string;
    zip?: string;
    number?: number;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
}

export interface Auth {
    // Define your Auth interface properties here
}
