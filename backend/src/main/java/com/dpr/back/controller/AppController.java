package com.dpr.back.controller;

import com.dpr.back.RequestDTO.requestlink.RequestLinkDTO;
import com.dpr.back.ResponseDTO.responselink.ResponseLinkDTO;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.*;

@RestController
public class AppController {
    private final Logger log = LogManager.getLogger(AppController.class);

    @GetMapping(value = "/status", produces = "text/html")
    public String status(){
        return "OK";
    }

    @PostMapping(value = "/postLink", produces = "application/json", consumes = "application/json")
    @Async
    public ResponseLinkDTO postLink(@RequestBody RequestLinkDTO requestDTO){
        return new ResponseLinkDTO(requestDTO);
    }

}
