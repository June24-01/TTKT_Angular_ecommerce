package com.migi.migi_project.repository.user;

import com.migi.migi_project.entity.Role;
import com.migi.migi_project.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
    @Query(value = "SELECT * FROM role WHERE name= ?1", nativeQuery = true)
    Optional<Role> findByName(String name);
}
