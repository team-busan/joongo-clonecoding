package com.example.joongomarket.common;

public interface ResponseCode {
    String SUCCESS = "SU";

    String VALIDATION_FALE = "VF";
    String DUPLICATE_ID = "DI";

    String SIGN_IN_FALE = "SF";
    String CERTIFICATION_FAIL = "CF";

    String MAIL_FAIL = "MF";
    String DATABASE_ERROR = "EBE";
    
    String DUPLICATE_EMAIL = "DE";
    
    String POST_FAIL = "PF";
    String NOT_EXIST_POST = "NEP";

    String NOT_EXIST_USER = "NEU";
}