package domain;

import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter @Setter
public class User {
    private String userId;
    private String password;
    private String name;
    private String email;
    private String address;
    private String phone;
    private List<Order> orders = new ArrayList<>();
}
