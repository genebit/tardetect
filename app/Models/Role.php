<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Role extends Model
{
    use HasFactory;

    public $incrementing = false;
    protected $primaryKey = 'role_id';
    protected $table = 'role';

    protected $hidden = [
        'created_at',
        'updated_at',
        'active_status'
    ];

    public function persons(): HasMany
    {
        return $this->hasMany(
            Person::class,
            'role_id',
            'role_id'
        );
    }
}
