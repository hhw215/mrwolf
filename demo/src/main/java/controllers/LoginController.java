package controllers;

import entities.LoginRequest;
import entities.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import repositories.LoginRepo;

@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private LoginRepo loginRepo;


    @PostMapping
    public LoginResponse login(@RequestBody LoginRequest loginRequest) {
        LoginResponse response = new LoginResponse();

        if (loginRequest.getUsername().equals("admin") && loginRequest.getPassword().equals("admin123")) {
            response.setSuccess(true);
        } else {
            response.setSuccess(false);
        }

        return response;
    }
}
