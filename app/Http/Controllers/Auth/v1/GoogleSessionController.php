<?php

namespace App\Http\Controllers\Auth\v1;

use App\Http\Controllers\Controller;
use App\Models\Person;
use App\Providers\RouteServiceProvider;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Laravel\Socialite\Facades\Socialite;
use Laravel\Socialite\Contracts\User;
use App\Models\User as UserModel;
use Log;

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
    public function create(Request $request): JsonResponse|RedirectResponse
    {
        try {
            $client = Socialite::driver('google')->user();

            // Returns a redirect response back to login with errors
            if (
                $client->user &&
                $this->authorizeClient($client)
            ) {
                return redirect()->intended(RouteServiceProvider::HOME);
            }

            throw new Exception('Failed to sign in with Google.');
        } catch (Exception $e) {
            Auth::guard('web')->logout();

            if (Auth::guard('web')->check()) {
                $request->session()->invalidate();
                $request->session()->regenerateToken();
            }

            return redirect()->route('auth.login')
                ->withErrors(['error' => 'Authentication failed: ' . $e->getMessage()]);
        }
    }

    private function authorizeClient(User $client): bool
    {
        try {
            // Check first if the user's email domain matches the allowed domain
            $allowedDomain = config('services.google.hd');
            if ($allowedDomain) {
                $emailDomain = substr(strrchr($client->getEmail(), "@"), 1);
                if ($emailDomain !== $allowedDomain)
                    throw new Exception("Unauthorized domain: $emailDomain");
            }

            // Verify the user to tardetect's database
            $user = UserModel::where('email', $client->getEmail())->firstOrFail();
            // If it does not exist, register the valid user
            if (empty($user))
                throw new Exception('Account is not found in the database.');

            Auth::login($user);

            Log::info('User ' . $client->getEmail() . ' authenticated successfully via Google OAuth.');
            return true;
        } catch (Exception $th) {
            Log::info('Failed to authorize Google client', ['error' => $th->getMessage()]);
            return false;
        }
    }
}
