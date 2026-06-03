package com.clinic.veterinary.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "reviews")
public class Review {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String authorName;
    
    @Column(nullable = false)
    private Integer rating;
    
    @Column(columnDefinition = "TEXT", nullable = false)
    private String comment;
    
    private LocalDateTime createdAt = LocalDateTime.now();

    public Review() {}

    public Review(String authorName, Integer rating, String comment) {
        this.authorName = authorName;
        this.rating = rating;
        this.comment = comment;
    }

    public Long getId() { return id; }
    public String getAuthorName() { return authorName; }
    public void setAuthorName(String authorName) { this.authorName = authorName; }
    public Integer getRating() { return rating; }
    public void setRating(Integer rating) { this.rating = rating; }
    public String getComment() { return comment; }
    public void setComment(String comment) { this.comment = comment; }
    public LocalDateTime getCreatedAt() { return createdAt; }
}
