<?php

namespace App\Services;

use App\DTOs\OperationResultDTO;
use App\Enums\GenericErrorMessage;
use App\Enums\GenericSuccessMessage;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Log;

class KioskServices
{
    public function __construct()
    {
    }

    public function getTime(): OperationResultDTO
    {
        try {
            $query = DB::query()->select(DB::raw('NOW() as current_datetime'))->first();

            $query = (object) [
                'current_date' => Carbon::parse($query->current_datetime)->format('Y-m-d'),
                'current_time' => Carbon::parse($query->current_datetime)->format('H:i:s'),
            ];

            return new OperationResultDTO(
                true,
                GenericSuccessMessage::SUCCESSFUL_API_CALL->value,
                null,
                $query
            );
        } catch (Exception $e) {
            Log::error(GenericErrorMessage::FAILED_API_ERROR->value, ['error' => $e->getMessage()]);
            return new OperationResultDTO(
                false,
                GenericErrorMessage::FAILED_API_ERROR->value,
                null,
                $e->getMessage()
            );
        }
    }
}
