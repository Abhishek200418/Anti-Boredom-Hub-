package com.example.Anti_Boredom.Hub.Service;

import com.example.Anti_Boredom.Hub.Model.Tasks;
import com.example.Anti_Boredom.Hub.Respository.TasksRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TasksService {

    @Autowired
    private TasksRepo repo;


    public Tasks addtasks(Tasks task){
        return repo.save(task);
    }

    public List<Tasks> getAllTask(){
        return repo.findAll();
    }

    public void DeleteId(int id){
        repo.deleteById(id);
    }

    public Tasks Updatetasks(int id,Tasks updateTask){
        Tasks tasks=repo.findById(id).orElse(null);
        if(tasks!=null){
            tasks.setName(updateTask.getName());
            tasks.setStatus(updateTask.getStatus());
            return repo.save(tasks);
        }
        return null;
    }
}
