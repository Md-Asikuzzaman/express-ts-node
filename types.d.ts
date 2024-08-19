interface UserParams {
  id: string;
}

interface UserQueryParams {
  name?: string;
  age?: string;
  limit?: string;
}

interface UserType {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  job_title: string;
}

interface ReqBodyType {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  job_title: string;
}
