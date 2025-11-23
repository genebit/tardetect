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
        try {
            Log::info('A user is trying to sign-in.', $credentials);

            if (! $token = Auth::attempt($credentials)) {
                throw new Exception('Invalid credentials', 401);
            }

            Log::info('User signed in successfully.', $credentials);

            return new OperationResultDTO(
                true,
                'Login successful',
                null,
                $this->respondWithToken($token)
            );
        } catch (Exception $e) {
            Log::error('User failed to sign-in', ['error' => $e->getMessage()]);
            return new OperationResultDTO(false, $e->getMessage(), null, null);
        }
    }

    public function mySession(): OperationResultDTO
    {
        try {
            $user = Auth::user();

            return new OperationResultDTO(
                true,
                'User retrieved successfully.',
                null,
                $user
            );
        } catch (Exception $e) {
            return new OperationResultDTO(
                false,
                'Failed to retrieve user: ' . $e->getMessage(),
                null
            );
        }
    }

    public function respondWithToken(string $token): array
    {
        return [
                'access_token'  => $token,
                'token_type'    => 'bearer',
                'expires_in'    => Auth::factory()->getTTL() * 60
        ];
    }
}
