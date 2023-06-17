package com.dpr.back.Logic;

import com.dpr.back.RequestDTO.requestlink.RequestLinkDTO;
import com.dpr.back.ResponseDTO.responselink.ResponseLinkDTO;

import java.util.ArrayList;

public class Logic {
    public ArrayList<String> links = new ArrayList<>();
    public String createShopName(RequestLinkDTO requestLinkDTO) {
        //ResponseLinkDTO dto = new ResponseLinkDTO(requestLinkDTO);
        links.add("wildberries");
        links.add("ozon");
        links.add("aliexpress");
        links.add("market.yandex");

        String link = requestLinkDTO.getLink();
        for (String item:
                links) {
            if (link.contains(item)) return item;
        }
        return "";
    }
}
