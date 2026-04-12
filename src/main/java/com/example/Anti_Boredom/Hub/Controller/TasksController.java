package com.example.Anti_Boredom.Hub.Controller;

import com.example.Anti_Boredom.Hub.Model.Tasks;
import com.example.Anti_Boredom.Hub.Service.TasksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173/")
public class TasksController {
    @Autowired
    private TasksService service;

    @PostMapping("tasks")
    public Tasks AddTasks(@RequestBody Tasks tasks){
        return  service.addtasks(tasks);
    }
    @GetMapping("tasks")
    public List<Tasks> getAllTasks(){
        return  service.getAllTask();
    }
    @PutMapping("tasks/{id}")
    public Tasks UpdateTasks(@PathVariable int id, @RequestBody Tasks tasks){
        return  service.Updatetasks(id,tasks);
    }
    @DeleteMapping("tasks/{id}")
    public void DeleteTask(@PathVariable int id){
        service.DeleteId(id);
    }
}
