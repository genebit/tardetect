export interface Role {
  role_id: string;
  role_name: string;
}

export interface Person {
  profile_picture?: string;
  first_name: string;
  last_name: string;
  birth_date: string;
  role: Role;
}

export interface User {
  user_id: number;
  email: string;
  person: Person;
}

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>
> = T & {
  auth: {
    user: User;
  };
};
