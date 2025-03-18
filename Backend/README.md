# User Registration Endpoint Documentation

## Endpoint
`POST /users/register`

## Description
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user, and returns an authentication token along with the user details.

## Required Data
The following fields are required in the request body:
- `fullname.firstname`: First name of the user (minimum 3 characters)
- `fullname.lastname`: Last name of the user (optional, minimum 3 characters if provided)
- `email`: Email address of the user (must be a valid email)
- `password`: Password for the user account (minimum 6 characters)

## Status Codes
- `201 Created`: User successfully registered
- `400 Bad Request`: Validation error or missing required fields

## Example Request
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
}
```

## Example Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "_id": "60d0fe4f5311236168a109ca",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com"
    }
}
```
