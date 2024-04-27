package cuckoo.com.api.user;

import jakarta.validation.constraints.*;

import java.util.Date;

public record UserRegisterData(

        @NotBlank
        String username,
        @Digits(integer = 6, fraction = 0)
        int age,
        @NotBlank
        @Pattern(regexp = "^\\d{11}$")
        String cpf,
        @NotBlank
        @Email
        String email,
        String password) {
}
