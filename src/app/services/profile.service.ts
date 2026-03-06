import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

profiles = [
  {
    id: 1,
    name: "Priyanka",
    age: 27,
    height: "5 ft 2 in",
    caste: "Tamil, Nair",
    profession: "Doctor",
    city: "Chennai",
    image: "https://randomuser.me/api/portraits/women/11.jpg"
  },
  {
    id: 2,
    name: "Pragati",
    age: 27,
    height: "5 ft 5 in",
    caste: "Kayastha",
    profession: "Doctor",
    city: "Chennai",
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    id: 3,
    name: "Aishwarya",
    age: 26,
    height: "5 ft 2 in",
    caste: "Tamil",
    profession: "Doctor",
    city: "Chennai",
    image: "https://randomuser.me/api/portraits/women/13.jpg"
  },
  {
    id: 4,
    name: "Divya",
    age: 25,
    height: "5 ft 4 in",
    caste: "Tamil, Iyer",
    profession: "Software Engineer",
    city: "Bangalore",
    image: "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    id: 5,
    name: "Sneha",
    age: 28,
    height: "5 ft 3 in",
    caste: "Tamil, Chettiar",
    profession: "Bank Manager",
    city: "Coimbatore",
    image: "https://randomuser.me/api/portraits/women/15.jpg"
  },
  {
    id: 6,
    name: "Meera",
    age: 26,
    height: "5 ft 6 in",
    caste: "Tamil",
    profession: "Architect",
    city: "Chennai",
    image: "https://randomuser.me/api/portraits/women/16.jpg"
  },
  {
    id: 7,
    name: "Kavya",
    age: 25,
    height: "5 ft 4 in",
    caste: "Tamil, Mudaliar",
    profession: "HR Manager",
    city: "Hyderabad",
    image: "https://randomuser.me/api/portraits/women/17.jpg"
  },
  {
    id: 8,
    name: "Ananya",
    age: 24,
    height: "5 ft 3 in",
    caste: "Tamil",
    profession: "UI Designer",
    city: "Chennai",
    image: "https://randomuser.me/api/portraits/women/18.jpg"
  },
  {
    id: 9,
    name: "Riya",
    age: 27,
    height: "5 ft 5 in",
    caste: "North Indian",
    profession: "Dentist",
    city: "Delhi",
    image: "https://randomuser.me/api/portraits/women/19.jpg"
  },
  {
    id: 10,
    name: "Pooja",
    age: 26,
    height: "5 ft 4 in",
    caste: "Tamil",
    profession: "Teacher",
    city: "Madurai",
    image: "https://randomuser.me/api/portraits/women/20.jpg"
  }
];

  constructor() {
    if (!localStorage.getItem('profiles')) {
      localStorage.setItem('profiles', JSON.stringify(this.profiles));
    }
  }

  getProfiles() {
    return JSON.parse(localStorage.getItem('profiles') || '[]');
  }

}