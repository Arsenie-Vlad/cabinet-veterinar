# Cabinet Veterinar „VetCare” - Aplicație Full-Stack

VetCare este o aplicație web realizată pentru un cabinet veterinar. Scopul proiectului este de a oferi clinicii o prezență online modernă, unde vizitatorii pot afla informații despre servicii, echipa medicală și pot citi recenziile altor clienți.

Aplicația include și un sistem de conturi. Utilizatorii se pot înregistra, se pot autentifica și pot lăsa recenzii despre experiența lor la cabinet.

Proiectul este împărțit în două părți principale:

* **Frontend** - partea vizuală a aplicației, realizată cu React.
* **Backend** - partea de server, realizată cu Spring Boot.

Cele două părți comunică între ele printr-un API REST.

---

## Tehnologii folosite

### Frontend

* **React.js** - folosit pentru construirea interfeței aplicației.
* **Vite** - folosit pentru pornirea rapidă a proiectului React.
* **Tailwind CSS v4** - folosit pentru stilizarea paginilor și pentru design responsive.
* **React Router DOM** - folosit pentru navigarea între pagini fără reîncărcarea browserului.
* **Lucide React** - folosit pentru iconițele din interfață.

### Backend

* **Java 17+**
* **Spring Boot 3** - folosit pentru construirea serverului și a API-ului.
* **Spring Security** - folosit pentru securitate, reguli de acces și configurarea CORS.
* **BCrypt Password Encoder** - folosit pentru criptarea parolelor înainte de salvarea lor în baza de date.
* **Spring Data JPA / Hibernate** - folosit pentru lucrul cu baza de date.

### Bază de date

* **MySQL** - rulat local prin XAMPP.
* Port folosit în proiect: **3307**.

---

## Funcționalități principale

### 1. Pagină de prezentare

Aplicația are o pagină principală unde sunt prezentate informații despre cabinet, serviciile oferite și echipa de medici veterinari.

### 2. Sistem de autentificare

Utilizatorii pot:

* să își creeze un cont;
* să se autentifice;
* să rămână logați prin salvarea sesiunii în `localStorage`;
* să se delogheze.

După autentificare, bara de navigare se modifică automat și afișează mesajul:

```text
Salut, Nume
```

### 3. Sistem de recenzii

Toți vizitatorii pot vedea recenziile existente.

Pentru a adăuga o recenzie, utilizatorul trebuie să fie autentificat. După trimiterea unei recenzii, aceasta este salvată în baza de date și afișată în aplicație.

---

## Instalare și rulare locală

Pentru a rula proiectul pe calculator, trebuie pornite trei componente:

1. baza de date MySQL;
2. serverul backend Spring Boot;
3. aplicația frontend React.

---

## Pasul 1: Configurarea bazei de date

1. Instalează și pornește **XAMPP**.
2. Pornește modulul **MySQL**.
3. Intră în **phpMyAdmin**:

```text
http://localhost/phpmyadmin
```

4. Creează o bază de date nouă cu numele:

```text
veterinar_db
```

5. Verifică portul MySQL.

În proiect, backend-ul este configurat să folosească portul:

```text
3307
```

Dacă MySQL rulează pe portul default `3306`, modifică portul în fișierul:

```text
backend/src/main/resources/application.properties
```

Schimbă `3307` cu `3306`.

---

## Pasul 2: Pornirea backend-ului

Deschide un terminal și intră în folderul backend:

```bash
cd backend
```

Pornește serverul Spring Boot:

```bash
./mvnw spring-boot:run
```

Pe Windows, poți folosi:

```bash
mvnw.cmd spring-boot:run
```

Backend-ul va rula pe:

```text
http://localhost:8080
```

La pornire, Hibernate va crea automat tabelele necesare în baza de date, cum ar fi `users` și `reviews`.

---

## Pasul 3: Pornirea frontend-ului

Deschide un al doilea terminal și intră în folderul frontend:

```bash
cd frontend
```

Instalează dependențele proiectului:

```bash
npm install
```

Pornește aplicația React:

```bash
npm run dev
```

După pornire, terminalul va afișa un link de forma:

```text
http://localhost:5173
```

Deschide acest link în browser pentru a folosi aplicația.

---

## Concluzie

VetCare este o aplicație Full-Stack simplă și funcțională, care combină un frontend modern în React cu un backend realizat în Spring Boot. Proiectul permite prezentarea unui cabinet veterinar, autentificarea utilizatorilor și gestionarea recenziilor printr-o bază de date MySQL.
