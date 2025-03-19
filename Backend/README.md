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

# Captain Registration Endpoint Documentation

## Endpoint
`POST /captain/register`

## Description
This endpoint is used to register a new captain. It validates the input data, hashes the password, creates a new captain, and returns an authentication token along with the captain details.

## Required Data
The following fields are required in the request body:
- `fullname.firstname`: First name of the captain (minimum 3 characters)
- `fullname.lastname`: Last name of the captain (optional, minimum 3 characters if provided)
- `email`: Email address of the captain (must be a valid email)
- `password`: Password for the captain account (minimum 6 characters)
- `vehicle.color`: Color of the vehicle (minimum 3 characters)
- `vehicle.plate`: Plate number of the vehicle (minimum 3 characters)
- `vehicle.capacity`: Capacity of the vehicle (minimum 1 sitting)
- `vehicle.vehicleType`: Type of the vehicle (must be one of 'car', 'motorcycle', 'auto')

## Status Codes
- `201 Created`: Captain successfully registered
- `400 Bad Request`: Validation error or missing required fields

## Example Request
```json
{
    "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "password": "password123",
    "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
    }
}
```

## Example Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "captain": {
        "_id": "60d0fe4f5311236168a109cb",
        "fullname": {
            "firstname": "Jane",
            "lastname": "Doe"
        },
        "email": "jane.doe@example.com",
        "vehicle": {
            "color": "Red",
            "plate": "XYZ123",
            "capacity": 4,
            "vehicleType": "car"
        }
    }
}
```

# User Login Endpoint Documentation

## Endpoint
`POST /users/login`

## Description
This endpoint is used to log in an existing user. It validates the input data, checks the user's credentials, and returns an authentication token along with the user details.

## Required Data
The following fields are required in the request body:
- `email`: Email address of the user (must be a valid email)
- `password`: Password for the user account (minimum 6 characters)

## Status Codes
- `200 OK`: User successfully logged in
- `400 Bad Request`: Validation error or missing required fields
- `401 Unauthorized`: Invalid email or password

## Example Request
```json
{
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

# User Profile Endpoint Documentation

## Endpoint
`GET /users/profile`

## Description
This endpoint is used to retrieve the profile of the authenticated user.

## Required Headers
- `Authorization`: Bearer token of the authenticated user

## Status Codes
- `200 OK`: Successfully retrieved user profile
- `401 Unauthorized`: Invalid or missing authentication token

## Example Request
```
GET /users/profile
Authorization: Bearer <token>
```

## Example Response
```json
{
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com"
}
```

# User Logout Endpoint Documentation

## Endpoint
`GET /users/logout`

## Description
This endpoint is used to log out the authenticated user by clearing the authentication token.

## Required Headers
- `Authorization`: Bearer token of the authenticated user

## Status Codes
- `200 OK`: Successfully logged out
- `401 Unauthorized`: Invalid or missing authentication token

## Example Request
```
GET /users/logout
Authorization: Bearer <token>
```

## Example Response
```json
{
    "message": "logged out"
}
```
