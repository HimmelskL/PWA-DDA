@extends('admin.admin_master')
@section('admin')

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<div class="page-wrapper">
			<div class="page-content">

				<!--breadcrumb-->
<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
	<div class="breadcrumb-title pe-3">eCommerce</div>
	<div class="ps-3">
		<nav aria-label="breadcrumb">
			<ol class="breadcrumb mb-0 p-0">
				<li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
				</li>
				<li class="breadcrumb-item active" aria-current="page">Nuevo Producto</li>
			</ol>
		</nav>
	</div>
</div>
<!--end breadcrumb-->

<div class="card">
  <div class="card-body p-4">
	  <h5 class="card-title">Add New Product</h5>
	  <hr>
       <div class="form-body mt-4">
       <form method="post" action="{{ route('product.store') }}" enctype="multipart/form-data"> 
	 @csrf
	    <div class="row">
		   <div class="col-lg-8">
           <div class="border border-3 p-4 rounded">
		   <div class="row g-3">
            <div class="col-md-4">
                    <label for="inputProductTitle" class="form-label">Código</label>
                    <input type="text" name="code" class="form-control" id="inputProductTitle" >
                </div>
                <div class="col-md-4">
                    <label for="inputProductTitle" class="form-label">Stock</label>
                    <input type="text" name="stock" class="form-control" id="inputProductTitle" >
                </div>
            </div>

			<div class="mb-3">
				<label for="inputProductTitle" class="form-label">Producto</label>
				<input type="text" name="product" class="form-control" id="inputProductTitle" >
			  </div>
			  <div class="col-12">
				<label for="inputProductType" class="form-label">Product Category</label>
				<select name="category" class="form-select" id="inputProductType">
			  <option selected="">Select Category</option>
				@foreach($category as $item)
				<option value="{{ $item->category_name}}"> {{ $item->category_name }}</option>
				@endforeach
				</select>
			</div>

              <div class="mb-3">
                <label for="inputProductDescription" class="form-label">Descripción</label>
                <textarea name="description" class="form-control" id="inputProductDescription" rows="3">
                </textarea>
              </div>
            </div>
		   </div>
		   <div class="col-lg-4">
<div class="border border-3 p-4 rounded">
  <div class="row g-3">
  <div class="col-md-6">
                <label for="inputPrice" class="form-label">Valor unitario</label>
                <input type="text" name="unitary_price" class="form-control" id="inputPrice" >
            </div>
            <div class="col-md-6">
                <label for="inputCompareatprice" class="form-label">IVA</label>
                <input type="text" name="iva" class="form-control" id="inputCompareatprice" >
            </div>
            <div class="col-md-6">
                <label for="inputCompareatprice" class="form-label">Descuento</label>
                <input type="text" name="discount" class="form-control" id="inputCompareatprice" >
            </div>
            <div class="col-md-6">
                <label for="inputCompareatprice" class="form-label">Importe total</label>
                <input type="text" name="amount" class="form-control" id="inputCompareatprice" >
            </div>

	  <div class="col-12">
		  <div class="d-grid">
             <button type="submit" class="btn btn-primary">Guardar Producto</button>
		  </div>
	  </div>
  </div> 
		  </div>
		  </div>
					   </div><!--end row-->
                       </form>

					</div>
				  </div>
			  </div>

			</div>
		</div>




<script src='https://cdn.tiny.cloud/1/vdqx2klew412up5bcbpwivg1th6nrh3murc6maz8bukgos4v/tinymce/5/tinymce.min.js' referrerpolicy="origin">
	</script>
	<script>
		tinymce.init({
		  selector: '#mytextarea'
		});
</script>





@endsection