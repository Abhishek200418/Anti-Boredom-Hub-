package com.example.Anti_Boredom.Hub.Service;

import com.example.Anti_Boredom.Hub.Model.User;
import com.example.Anti_Boredom.Hub.Respository.UserRepo;
import com.example.Anti_Boredom.Hub.Security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepo repo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtUtil jwtUtil;

    public User register(User user){
        String password=passwordEncoder.encode(user.getPassword());
        user.setPassword(password);
        return repo.save(user);
    }
    public String login(User user){
        User dbuser= repo.findByusername(user.getUsername());
        if(dbuser!=null && passwordEncoder.matches(user.getPassword(), dbuser.getPassword())){
            return jwtUtil.generateToken(user.getUsername());
        }
        return "Invalid Credentials";
    }
}
