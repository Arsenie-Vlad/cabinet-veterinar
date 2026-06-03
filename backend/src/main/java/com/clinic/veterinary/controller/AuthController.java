// Gestioneaza endpoint-urile API pentru crearea si autentificarea utilizatorilor
package com.clinic.veterinary.controller;

import com.clinic.veterinary.model.User;
import com.clinic.veterinary.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth") // Prefixul folosit pentru toate rutele de autentificare
public class AuthController {

    @Autowired
    private UserRepository userRepository; // Gestioneaza interactiunea cu tabelul de utilizatori din baza de date

    @Autowired
    private PasswordEncoder passwordEncoder; // Utilitar utilizat pentru criptarea parolelor

    @PostMapping("/register") // Ruta POST apelata la crearea unui cont
    public ResponseEntity<?> register(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Email-ul există deja!"));
        }

        user.setPassword(passwordEncoder.encode(user.getPassword())); // Se cripteaza parola inainte de salvare
        userRepository.save(user);

        return ResponseEntity.ok(Map.of("message", "Cont creat cu succes!"));
    }

    @PostMapping("/login") // Ruta POST apelata pentru logare
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String password = credentials.get("password");

        Optional<User> optionalUser = userRepository.findByEmail(email);

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            if (passwordEncoder.matches(password, user.getPassword())) { // Coreleaza parola in clar cu varianta hash-uita
                return ResponseEntity.ok(Map.of(
                    "message", "Logare reușită!",
                    "name", user.getName(),
                    "role", user.getRole()
                ));
            }
        }

        return ResponseEntity.status(401).body(Map.of("message", "Email sau parolă incorectă!"));
    }
}
