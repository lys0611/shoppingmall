package domain;

import lombok.*;

@Getter @Setter
public class Item {
    private String name;
    private int price;
    private int price_sale;
    private String content;
    private boolean sold_out;
}
