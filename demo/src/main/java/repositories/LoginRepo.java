package repositories;

import entities.LoginRequest;
import org.springframework.data.repository.CrudRepository;

public interface LoginRepo extends CrudRepository<LoginRequest, Long> {
}
