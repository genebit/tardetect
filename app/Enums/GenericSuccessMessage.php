<?php

namespace App\Enums;

use App\Enums\Traits\Utils;

enum GenericSuccessMessage: string
{
    use Utils;

    case SUCCESSFUL_API_CALL = 'Successfully fetched data from the API.';
}
