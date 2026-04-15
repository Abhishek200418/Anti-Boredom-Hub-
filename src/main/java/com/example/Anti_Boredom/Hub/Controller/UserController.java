package com.example.Anti_Boredom.Hub.Controller;

import com.example.Anti_Boredom.Hub.Model.User;
import com.example.Anti_Boredom.Hub.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserService Service;
    @PostMapping("Login")
    public String Login(@RequestBody User user){
        return Service.login(user);
    }
    @PostMapping("register")
    public User register(@RequestBody User user){
        return Service.register(user);
    }
}
