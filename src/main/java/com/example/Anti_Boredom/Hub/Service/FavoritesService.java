package com.example.Anti_Boredom.Hub.Service;

import com.example.Anti_Boredom.Hub.Model.Favorites;
import com.example.Anti_Boredom.Hub.Respository.FavoritesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoritesService {

    @Autowired
    private FavoritesRepo repo;

    public List<Favorites> getAllFavorites(){
        return repo.findAll();
    }

    public Favorites addFavorites(Favorites favorites){
        return  repo.save(favorites);
    }

    public void DeleteById(int id){
        repo.deleteById(id);
    }
}
