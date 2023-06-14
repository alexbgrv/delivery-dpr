package com.dpr.back.ResponseDTO.responselink;

import com.dpr.back.Logic.Logic;
import com.dpr.back.RequestDTO.requestlink.RequestLinkDTO;
import lombok.Data;

import java.util.ArrayList;
import java.util.UUID;

@Data
public class ResponseLinkDTO {

    private String UUID;
    private String Link;
    private String shopName;

    public ResponseLinkDTO(RequestLinkDTO requestLinkDTO) {
        this.UUID = String.valueOf(java.util.UUID.randomUUID());
        this.Link = requestLinkDTO.getLink();
        this.shopName = new Logic().createShopName(requestLinkDTO);
    }

}
