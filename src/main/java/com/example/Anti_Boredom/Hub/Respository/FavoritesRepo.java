package com.example.Anti_Boredom.Hub.Respository;

import com.example.Anti_Boredom.Hub.Model.Favorites;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavoritesRepo extends JpaRepository<Favorites,Integer> {
}
