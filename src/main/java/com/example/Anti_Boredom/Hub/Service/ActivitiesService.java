package com.example.Anti_Boredom.Hub.Service;

import com.example.Anti_Boredom.Hub.Model.Activities;
import com.example.Anti_Boredom.Hub.Respository.ActivitiesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class ActivitiesService {
    @Autowired
    private ActivitiesRepo repo;

    public Activities addActivities(Activities activities){
        return  repo.save(activities);
    }

    public List<Activities> getActivities(){
        return  repo.findAll();
    }

    public void DeleteActivities(int id){
        repo.deleteById(id);
    }
}
