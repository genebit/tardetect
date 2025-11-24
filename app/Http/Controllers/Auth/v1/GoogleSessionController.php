<?php

namespace App\Http\Controllers\Auth\v1;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Laravel\Socialite\Facades\Socialite;
use Laravel\Socialite\Contracts\User;

/**
 * @tags Authentication API
 */
class GoogleSessionController extends Controller
{
    /**
     * Google OAuth 2.0 Redirect Handler
     *
     * Redirect the user to the Google authentication page.
     * @return RedirectResponse
     */
    public function index(): RedirectResponse
    {
        return Socialite::driver('google')
            ->with(['hd' => config('services.google.hd')])
            ->redirect();
    }

    /**
     * Google OAuth 2.0 Callback Handler
     *
     * Handle the callback from Google after authentication.
     * @return JsonResponse|RedirectResponse
     */
    public function create(): JsonResponse|RedirectResponse
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

    private function authorizeClient(User $client) : bool
    {
        // Check first if the user's email domain matches the allowed domain
        $allowedDomain = config('services.google.hd');

        // Verify the user to tardetect's database

        // If it does not exist, register the valid user

        // If all checks pass, return true
        return false;
    }
}
