package domain;

import lombok.*;

@Getter @Setter
public class OrderItem {    // 주문 상품
    private int productNum;
    private Item item;
    private Order order;
    private int orderItemPrice;
    private int orderItemQuantity;

    public static OrderItem createOrderItem(Item item, int orderItemPrice, int orderItemQuantity) { // 주문할 상품 정보
        OrderItem orderItem = new OrderItem();
        orderItem.setItem(item);
        orderItem.setOrderItemPrice(orderItemPrice);
        orderItem.setOrderItemQuantity(orderItemQuantity);

        return orderItem;
    }

    public int getTotalPrice() {    // 주문 상품 전체 가격 조회
        return getOrderItemPrice() * getOrderItemQuantity();
    }

    public void cancel() {  // 주문 취소
        // 이전 화면으로 되돌아가기
    }
}
