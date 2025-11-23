<?php

namespace App\Http\Controllers\Auth;

use App\DTOs\OperationResultDTO;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Services\AuthServices;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Laravel\Socialite\Contracts\User;

class AuthController extends Controller
{
    private $authServices;

    public function __construct(AuthServices $authServices)
    {
        $this->authServices = $authServices;
    }

    public function login(LoginRequest $request): JsonResponse
    {
        $result = $this->authServices->signIn($request->only('email', 'password'));
        return response()->json($result->toArray());
    }

    public function authorizeClient(User $client) : bool
    {
        // Check first if the user's email domain matches the allowed domain
        $allowedDomain = config('services.google.hd');

        // Verify the user to tardetect's database

        // If it does not exist, register the valid user

        // If all checks pass, return true
        return false;
    }

    public function redirectToGoogle(): RedirectResponse
    {
        return Socialite::driver('google')
            ->with(['hd' => config('services.google.hd')])
            ->redirect();
    }

    public function redirectToGoogleCallback(): JsonResponse|RedirectResponse
    {
        try {
            $client = Socialite::driver('google')->user();

            // Returns a redirect response back to login with errors
            if (
                $client->user &&
                $this->authorizeClient($client)
            ) {
                return redirect()->route('dashboard');
            }

            throw new Exception('Failed to sign in with Google.');
        } catch (Exception $e) {
            $result = $this->logout();

            return redirect()->route('auth.login')
                ->withErrors(['error' => 'Authentication failed: ' . $result->content()]);
        }
    }

    public function me(): JsonResponse
    {
        $result = $this->authServices->mySession();
        return response()->json($result->toArray());
    }

    public function logout(): JsonResponse
    {
        try {
            Auth::logout();

            return response()->json(new OperationResultDTO(
                true,
                'User has been successfully logged out.',
                null
            ), 200);
        } catch (Exception $e) {
            return response()->json(new OperationResultDTO(
                false,
                'Logout failed: ' . $e->getMessage(),
                null
            ), 500);
        }
    }

    public function refresh(): JsonResponse
    {
        return response()->json(
            $this->authServices->respondWithToken(Auth::refresh())
        );
    }
}
