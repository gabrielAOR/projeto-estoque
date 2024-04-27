package cuckoo.com.api.controller;

import cuckoo.com.api.user.*;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("usuarios")
@CrossOrigin(origins = "http://localhost:3000/")
public class UserController {

    @Autowired
    private UserRepository repository;

    @PostMapping
    @Transactional
    public void register(@RequestBody @Valid UserRegisterData data){
        repository.save(new User(data));
        System.out.println("Usuario: " + data.username() + " registrado com sucesso!");
    }

    @GetMapping
    public Page<DataUserListing> getUsers(Pageable pagination){
        return repository.findAll(pagination).map(DataUserListing::new);
    }

    @PutMapping
    @Transactional
    public void updateUser(@RequestBody @Valid UserUpdateData data){
        var user = repository.getReferenceById(data.id());
        user.UpdateRegister(data);
    }
}
