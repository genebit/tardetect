<?php

namespace App\Http\Controllers\Api\Kiosk\v1;

use App\DTOs\OperationResultDTO;
use App\Http\Controllers\Controller;
use App\Http\Resources\OperationResultResource;
use App\Services\KioskServices;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class KioskController extends Controller
{
    private $kioskServices;

    public function __construct(KioskServices $kioskServices)
    {
        $this->kioskServices = $kioskServices;
    }

    /**
     * Get Server's DateTime
     */
    public function datetime(): JsonResponse|OperationResultResource
    {
        $res = $this->kioskServices->getTime();

        if (!$res->success) {
            return (new OperationResultResource(OperationResultDTO::from($res)))
                ->response()
                ->setStatusCode(404);
        }

        return new OperationResultResource(OperationResultDTO::from($res));
    }
}
