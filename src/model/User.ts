interface UserAdress {
  city: string;
  geo: {
    lat: string;
    lng: string;
  }
  street: string;
  suite: string;
  zipcode: string;
}

interface UserCompany {
  bs: string;
  catchPhrase: string;
  name: string;
}

export interface User {
  address: UserAdress;
  company: UserCompany;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}
