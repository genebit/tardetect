<?php

namespace App\Repositories;

use App\Contracts\IGenericRepository;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;

class GenericRepository implements IGenericRepository
{
    /**
     * @var \Illuminate\Database\Eloquent\Model
     */
    protected $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    /**
     * @inheritDoc
     */
    public function setModel(Model $model)
    {
        $this->model = $model;
        return $this;
    }

    /**
     * @inheritDoc
     */
    public function get(): Collection
    {
        return $this->model->all();
    }

    /**
     * @inheritDoc
     */
    public function getById($id): ?Model
    {
        return $this->model->find($id);
    }

    /**
     * @inheritDoc
     */
    public function store(array $data): Model
    {
        return $this->model->create($data);
    }

    /**
     * @inheritDoc
     */
    public function modify($id, array $data): bool
    {
        $record = $this->model->find($id);
        if ($record) {
            return $record->update($data);
        }
        return false;
    }

    /**
     * @inheritDoc
     */
    public function purge($id): bool
    {
        // Eloquent's destroy returns true if any model was deleted.
        return (bool)$this->model->destroy($id);
    }
}
