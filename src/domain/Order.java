package domain;

import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter
public class Order {    // 주문
    private User user;
    private LocalDateTime date;
    private int orderNum;
    private List<OrderItem> orderItems = new ArrayList<>();

    public void setUser(User user) {    // 해당 사용자의 주문 목록을 가져온 후, 현재 객체를 해당 목록에 추가
        this.user = user;
        user.getOrders().add(this);
    }

    public void addOrderItem(OrderItem orderItem) { // 해당 객체를 현재 객체의 orderItems 목록에 추가
        orderItems.add(orderItem);
        orderItem.setOrder(this);
    }

    public static Order createOrder(User user, OrderItem... orderItems) { // 메서드 호출 시 필요한 만큼의 OrderItem 객체 전달 가능
        Order order = new Order();
        order.setUser(user);
        for (OrderItem orderItem : orderItems) {
            order.addOrderItem(orderItem);
        }
        order.setDate(LocalDateTime.now());
        return order;
    }
}
