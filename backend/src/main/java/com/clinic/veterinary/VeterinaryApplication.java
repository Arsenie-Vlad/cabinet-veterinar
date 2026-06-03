package com.clinic.veterinary;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class VeterinaryApplication {

    public static void main(String[] args) {
        SpringApplication.run(VeterinaryApplication.class, args);
        System.out.println("Serverul Spring Boot a pornit pe portul 8080!");
    }

}
