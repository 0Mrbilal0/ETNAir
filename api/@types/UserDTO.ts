interface UserDTO {
    id: number
    email: string
    name: string
    password: string
    about_me: string
    phone_number: string
    user_type: userTypes
    created_at: Date
    updated_at: Date
}

enum userTypes {
    "admin",
    "client"
}

export type { UserDTO } ;
