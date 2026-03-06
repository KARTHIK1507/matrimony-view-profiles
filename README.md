# Matrimony Profile Swipe Application

## Overview

This project is a Hybrid App style UI developed using **Angular 19** and **Bootstrap**.
The application displays a list of matrimonial profiles and allows the user to interact with them through actions such as **Interested, Not Interested, and Shortlisted**.

Profiles are displayed in a **carousel/card layout**, and the user can navigate through profiles and view detailed information for each profile.

The application also stores profile data and state using **Local Storage**, ensuring that when the user navigates back from the profile details page, the previously viewed profile remains active.

---

## Features Implemented

### 1. Profile Carousel Display

Profiles are displayed using a **Bootstrap carousel layout** that mimics the swipe functionality mentioned in the requirement.

Each carousel slide represents one profile card containing:

* Profile image
* Name
* Age
* Height
* Profession
* City

---

### 2. Profile Interaction Actions

Users can perform the following actions on each profile:

✔ **Interested**
Displays an alert message: *"Interested"* and moves to the next profile.

❌ **Not Interested**
Displays an alert message: *"Not Interested"* and moves to the next profile.

⭐ **Shortlisted**
Displays an alert message: *"Shortlisted"* and moves to the next profile.

After each action, the carousel automatically navigates to the next profile.

---

### 3. Profile Details Page

Clicking on the profile image navigates the user to a **Profile Details Page**.

This page displays:

* Profile image
* Name
* Age
* Height
* Profession
* City
* Additional profile details

When the user navigates back to the profile list, the carousel restores the **previously active profile**.

---

### 4. Local Storage Integration

Profile data is stored in **Local Storage** to meet the requirement of avoiding hardcoded profile information in the UI.

Local Storage is also used to store the **current profile index**, ensuring the user returns to the same profile after navigation.

---

### 5. Responsive Design

The application is designed to work across:

* Desktop browsers
* Mobile devices

Bootstrap layout ensures the UI adjusts properly across different screen sizes.

---

## Technologies Used

* Angular 19
* TypeScript
* Bootstrap 5
* HTML5
* CSS3
* Local Storage

---

## Project Structure

src/
│
├── app/
│   ├── pages/
│   │   ├── matches/
│   │   │   ├── matches.component.ts
│   │   │   ├── matches.component.html
│   │   │   ├── matches.component.css
│   │   │
│   │   ├── profile/
│   │       ├── profile.component.ts
│   │       ├── profile.component.html
│   │
│   ├── services/
│   │   ├── profile.service.ts
│
├── assets/
│   ├── images/

---

## Installation & Setup

1. Clone the repository

```
git clone https://github.com/your-username/matrimony-profile-carousel.git
```

2. Navigate to the project directory

```
cd matrimony-profile-carousel
```

3. Install dependencies

```
npm install
```

4. Run the application

```
ng serve
```

5. Open in browser

```
http://localhost:4200
```

---

## Assignment Requirements Covered

| Requirement          | Implementation                      |
| -------------------- | ----------------------------------- |
| Swipe photos         | Carousel navigation                 |
| Right swipe / Tick   | Interested alert + next profile     |
| Left swipe / Cross   | Not Interested alert + next profile |
| Swipe up / Shortlist | Shortlisted alert + next profile    |
| Profile details page | Separate profile view page          |
| Local Storage        | Profiles and state stored           |
| Responsive UI        | Bootstrap responsive layout         |

---

## Author

**Karthik K**
Angular Developer
Chennai, India
