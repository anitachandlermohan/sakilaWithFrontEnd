package qa.anita.mohan.springboot.sakila.springBootSakilaDatabaseApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class SpringBootSakilaDatabaseAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootSakilaDatabaseAppApplication.class, args);
	}
}
