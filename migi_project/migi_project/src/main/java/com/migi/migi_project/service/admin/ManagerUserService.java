package com.migi.migi_project.service.admin;

import com.migi.migi_project.model.dto.UserDTO;
import com.migi.migi_project.model.response.ResponseNormal;

import java.util.List;

public interface ManagerUserService {
    List<UserDTO> findAllUsers(Integer page, Integer limit);
    Long countUsers();
    ResponseNormal addUser(UserDTO userDTO);
    ResponseNormal updateUser(UserDTO userDTO);
    ResponseNormal deleteUser(Integer id);
}
