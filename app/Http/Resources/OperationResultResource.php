<?php

namespace App\Http\Resources;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OperationResultResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            /**
             * Indicates success or failure
             */
            'success' => (bool) $this->resource->success,
            /**
             * Generic message (success or error)
             */
            'message' => (string) $this->resource->message,
            /**
             * Optional error code
             */
            'errorCode' => (string) $this->resource->errorCode,
            /**
             * Accepts any type (string, array, object)
             */
            'info' => $this->resource->info,
        ];
    }
}
