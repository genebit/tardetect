<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Person extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $primaryKey = 'person_id';
    protected $table = 'person';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'profile_picture',
        'first_name',
        'last_name',
        'birth_date',
        'role_id',
    ];
}
