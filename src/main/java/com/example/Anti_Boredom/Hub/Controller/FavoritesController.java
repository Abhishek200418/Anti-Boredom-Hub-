package com.example.Anti_Boredom.Hub.Controller;

import com.example.Anti_Boredom.Hub.Model.Favorites;
import com.example.Anti_Boredom.Hub.Respository.FavoritesRepo;
import com.example.Anti_Boredom.Hub.Service.FavoritesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FavoritesController {
    @Autowired
    private FavoritesService service;
    @PostMapping("favorites")
    public Favorites addFavorites(@RequestBody Favorites favorites){
        return service.addFavorites(favorites);
    }
    @DeleteMapping("favorites/{id}")
    public void DeleteFav(@PathVariable int id){
        service.DeleteById(id);
    }
    @GetMapping("favorites")
    public List<Favorites> getAllFav(){
        return service.getAllFavorites();
    }
}
