<?php

namespace App\Contracts;

interface IGenericRepository
{
    /**
     * Set the model instance to be used by the repository.
     * @param \Illuminate\Database\Eloquent\Model $model
     * @return $this
     */
    public function setModel(\Illuminate\Database\Eloquent\Model $model);

    /**
     * Fetch all records.
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function get();

    /**
     * Fetch a single record by its primary key.
     * @param mixed $id
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function getById($id);

    /**
     * Create a new record.
     * @param array $data
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function store(array $data);

    /**
     * Update an existing record.
     * @param mixed $id
     * @param array $data
     * @return bool|int
     */
    public function modify($id, array $data);

    /**
     * Delete a record.
     * @param mixed $id
     * @return bool|null
     */
    public function purge($id);
}
