package cuckoo.com.api.user;

import jakarta.validation.constraints.NotNull;

import java.util.UUID;

public record UserUpdateData(
        @NotNull
        UUID id,
        String name,
        String email,
        int age) {
}
