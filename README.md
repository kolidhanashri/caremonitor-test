# CareMonitor Angular App

This is a demo Angular 19 application implementing authentication, routing, and API integration using `json-server` for mock backend support.

## 🔧 Features

- ✅ Login with form validation and error messages
- ✅ Cookie-based token and user data storage
- ✅ AuthGuard for protected routes
- ✅ Dashboard with logout and item list navigation
- ✅ Item list fetched from `json-server`
- ✅ Error handling for login failures and API errors

---

## 📦 Tech Stack

- **Angular 19**
- **json-server** for mock backend
- **ngx-cookie-service** for storing token in cookies
- **Reactive Forms** for login validation

---

## 📁 Project Structure

src/
├── app/
│ ├── core/ # Auth service, guards, interceptors
│ ├── features/
│ │ ├── login/
│ │ ├── dashboard/
│ │ └── list/
│ └── shared/



## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/kolidhanashri/caremonitor-test.git
cd caremonitor-test
npm install

### 2. Setup Mock Server (json-server)

npm install -g json-server

run command as - 'json-server --watch db.json --port 3000' at root level for watch and connect to server with port 3000


