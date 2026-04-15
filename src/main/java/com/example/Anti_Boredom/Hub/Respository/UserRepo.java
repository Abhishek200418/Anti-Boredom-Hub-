package com.example.Anti_Boredom.Hub.Respository;

import com.example.Anti_Boredom.Hub.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User,Integer> {
    User findByusername(String username);
}
