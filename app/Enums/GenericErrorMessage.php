<?php

namespace App\Enums;

use App\Enums\Traits\Utils;

enum GenericErrorMessage: string
{
    use Utils;

    case SERVER_ERROR = 'An unexpected server error occurred. Please try again later.';
    case FAILED_API_ERROR = 'Failed to fetch data from the API. Please try again later.';
}
