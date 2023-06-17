package com.dpr.back.ResponseDTO.responselink;

import com.dpr.back.Logic.Logic;
import com.dpr.back.RequestDTO.requestlink.RequestLinkDTO;
import lombok.Data;

import java.util.ArrayList;
import java.util.UUID;

public class ResponseLinkDTO {

    private String UUID;
    private String Link;
    private String shopName;

    public ResponseLinkDTO(RequestLinkDTO requestLinkDTO) {
        this.UUID = String.valueOf(java.util.UUID.randomUUID());
        this.Link = requestLinkDTO.getLink();
        this.shopName = new Logic().createShopName(requestLinkDTO);
    }

    public String getUUID() {
        return UUID;
    }

    public void setUUID(String UUID) {
        this.UUID = UUID;
    }

    public String getLink() {
        return Link;
    }

    public void setLink(String link) {
        Link = link;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    /*public ArrayList<String> links = new ArrayList<>();

    public String createShopName(RequestLinkDTO requestLinkDTO) {
        links.add("wildberries");
        links.add("ozon");
        links.add("aliexpress");
        links.add("market.yandex");

        for (String item:
                links) {
            if (requestLinkDTO.getLink().contains(item)) setShopName(item);
        }
        return getShopName();
    }*/

}
