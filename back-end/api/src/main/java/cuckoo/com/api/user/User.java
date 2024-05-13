package cuckoo.com.api.user;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Date;
import java.util.UUID;

@Table(name = "users")
@Entity(name = "User")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "users_id", updatable = false, unique = true, nullable = false)
    private UUID id;
    private String username;
    private int age;
    private String cpf;
    private String email;
    private String password;

    public User(UserRegisterData data){
        this.username = data.username();
        this.age = data.age();
        this.cpf = data.cpf();
        this.email = data.email();
        this.password = data.password();
    }

    public void UpdateRegister(UserUpdateData data) {
        if(data.name() != null){
            this.username = data.name();
        }
        if(data.age() != 0){
            this.age = data.age();
        }
    }

}
