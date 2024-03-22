package com.example.joongomarket.common;

public interface ResponseMessage {
    String SUCCESS = "Success.";

    String VALIDATION_FALE = "Validation failed.";
    String DUPLICATE_ID = "Duplicate Id.";

    String SIGN_IN_FALE = "Login information mismatch.";
    String CERTIFICATION_FAIL = "Certification failed.";

    String MAIL_FAIL = "Mail send failed.";
    String DATABASE_ERROR = "Database error.";

    String DUPLICATE_EMAIL = "Duplicate Email.";
    
    String POST_FAIL = "Post Fail.";
    String NOT_EXIST_POST = "Not Exist Post.";

    String NOT_EXIST_USER = "Not Exist User.";
}
