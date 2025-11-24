<?php

namespace App\Enums\Traits;

trait Utils
{
    public function format(string ...$args): string
    {
        return sprintf($this->value, ...$args);
    }
}
