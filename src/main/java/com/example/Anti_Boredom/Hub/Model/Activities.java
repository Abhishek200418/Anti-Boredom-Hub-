package com.example.Anti_Boredom.Hub.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Activities {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String category;
    private Boolean completed;
    @OneToMany(mappedBy = "activities")
    private List<Favorites> favorites;
}
