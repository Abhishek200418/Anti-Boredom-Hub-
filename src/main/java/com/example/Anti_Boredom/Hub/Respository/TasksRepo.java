package com.example.Anti_Boredom.Hub.Respository;

import com.example.Anti_Boredom.Hub.Model.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TasksRepo extends JpaRepository<Tasks,Integer> {
}
