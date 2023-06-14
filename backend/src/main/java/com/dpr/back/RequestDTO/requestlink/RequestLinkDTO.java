package com.dpr.back.RequestDTO.requestlink;

import lombok.Data;

@Data
public class RequestLinkDTO {
    private String link;

    public RequestLinkDTO(String link) {
        this.link = link;
    }

}
