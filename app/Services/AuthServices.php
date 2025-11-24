<?php

namespace App\Services;

use App\DTOs\OperationResultDTO;
use Exception;
use Illuminate\Support\Facades\Auth;
use Log;

class AuthServices
{
    public function __construct()
    {
    }

    public function signIn(array $credentials): OperationResultDTO
    {
    }

    public function logout(): OperationResultDTO
    {
    }
}
