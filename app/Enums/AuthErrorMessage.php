<?php

namespace App\Enums;

use App\Enums\Traits\Utils;

enum AuthErrorMessage: string
{
    use Utils;

    case AUTH_FAILED = 'Authentication failed. Please try again.';
    case UNAUTHORIZED = 'Unauthorized access.';
    case INVALID_CREDENTIALS = 'Invalid email or password.';
    case ACCOUNT_NOT_FOUND = 'Account is not found in the database.';
    case UNAUTHORIZED_DOMAIN = 'Unauthorized domain: %s';
    case GOOGLE_SIGNIN_FAILED = 'Failed to sign in with Google.';
}
