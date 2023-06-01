export interface Ride {
    user: User;
    status: string;
    car_comfort: string;
    ordered_time: string;
    start_location: string;
    finish_location: string;
    income: string;
}
export interface User {
    name: string;
    phone: string;
    avatar: string;
}

export interface TableHeader {
    label: string;
    property: string;
  }