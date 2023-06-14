package com.dpr.back;

import com.dpr.back.controller.AppController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

public class BackApplication {

    public static void main(String[] args) {
        SpringApplication.run(AppController.class, args);
    }

}
