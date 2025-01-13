<?php $__env->startSection('content'); ?>

<div class="container w-25 border p-4 mt-4">

<form action="<?php echo e(route('todos_ljm')); ?>" method="POST">
        <?php echo csrf_field(); ?>
        <?php echo method_field('PATCH'); ?>
        <?php echo e(method_field('PATCH')); ?>

        <?php if(session('success')): ?>

            <h6 class="alert alert-success"><?php echo e(session('success')); ?></h6>

        <?php endif; ?>

        <?php $__errorArgs = ['title'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>

            <h6 class="alert alert-danger"><?php echo e($message); ?></h6>

        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>

        <div class="mb-3">

            <label for="title" class="form-label">Titulo de la tarea</label>

            <input type="text" name="title" class="form-control">

        </div>

        <label for="category_id" class="form-label">Categoria de la tarea</label>
        <select name="category_id" class="form-select">
            <?php $__currentLoopData = $categories_ljm; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category_ljm): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <option value="<?php echo e($category_ljm->id); ?>"><?php echo e($category_ljm->bame); ?></option>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </select>
        <button type="submit" class="btn btn-primary">Crear nueva tarea</button>

    </form>

    <div>

        <?php $__currentLoopData = $todos_ljm; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $todo_ljm): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>

        <div class="row py-1">

            <div class="col-md-9 d-flex align-items-center">

            <a href="<?php echo e(route('todos-update_ljm', ['id' => $todo_ljm->id])); ?>"><?php echo e($todo_ljm->title); ?></a>

            </div>

            <div class="col-md-3 d-flex justify-content-end">

                <form action="<?php echo e(route('todos-destroy_ljm',[$todo_ljm->id])); ?>" method="POST">

                    <?php echo method_field('DELETE'); ?>

                    <?php echo csrf_field(); ?>

                    <button class="btn btn-danger btn-sm">Eliminar</button>

                </form>

            </div>

        </div>

        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

    </div>

</div>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('app_ljm', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\Dell\Desktop\TSU-4°A-Sep-Dic\AWS\4A-LaborstorioLaravel-ljm\resources\views/todos_ljm/index_ljm.blade.php ENDPATH**/ ?>