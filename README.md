# Laravel 10 with React (Inertia.js) Template

**A project template built using Laravel 10 with React Inertia.js Stack and JWT Authentication**  
**Developed by:** _Johcel Gene T. Bitara_

---

## 🛠 Tech Stack

- **PHP**
- **Redis**
- **Node.js**
- **Laravel v10 + Inertia.js (React)**
- **Typescript**
- **Tailwind CSS**
- **Material UI**
- **Shadcn UI**
- **MySQL**

## Project Snapshots

Collapse to view.

<details>

> Under development...

</details>

---

## ⚙️ How to Run the Project

#### Prerequisites:

```bash
# Install PHP dependencies
composer install

copy .env.example .env

# Generate JWT secret
php artisan key:generate
php artisan jwt:secret

# Install JS dependencies
npm install

# Run database migrations
php artisan migrate

# Publish to vendor
php artisan log-viewer:publish
```

#### Running the Application Localy

```bash
# Start the Laravel backend server
php artisan serve --host localhost

# Start the Vite dev server
npm run dev
```

## 🐋 Running with Docker

```bash
docker build -t laravel-react:latest .
docker compose up -d
# Launch the application in http://localhost:8080/
```
