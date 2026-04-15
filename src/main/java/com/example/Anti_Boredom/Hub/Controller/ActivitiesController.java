package com.example.Anti_Boredom.Hub.Controller;

import com.example.Anti_Boredom.Hub.Model.Activities;
import com.example.Anti_Boredom.Hub.Model.Favorites;
import com.example.Anti_Boredom.Hub.Service.ActivitiesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ActivitiesController {
    @Autowired
    private ActivitiesService service;

    @PostMapping("activities")
    public Activities AddActivities(@RequestBody Activities activities){
        return  service.addActivities(activities);
    }
    @GetMapping("activities")
    public List<Activities> getAllActivities(){
        return  service.getActivities();
    }
    @DeleteMapping("activities/{id}")
        public void Delete(@PathVariable int id){
        service.DeleteActivities(id);
        }
}
