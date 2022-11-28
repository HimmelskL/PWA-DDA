@extends('admin.admin_master')
@section('admin')


<div class="page-wrapper">
			<div class="page-content">



<div class="card radius-10">
						<div class="card-body">
							<div class="d-flex align-items-center">
	<div>
		<h5 class="mb-0">All Product </h5>
	</div>
	<div class="font-22 ms-auto"><i class="bx bx-dots-horizontal-rounded"></i>
	</div>
</div>
<hr>
<div class="table-responsive">
	<table class="table align-middle mb-0">
		<thead class="table-light">
			<tr>
				<th>#</th>
				<th>Código</th>	
				<th>Stock</th>
				<th>Producto</th>	
				<th>Categoría</th>	
				<th>Descripción</th>
				<th>Precio unitario</th>	
				<th>IVA</th>	
				<th>Descuento</th>	
				<th>Importe total</th> 
				<th>Acción</th>
			</tr>
		</thead>
		<tbody>
			@php($i = 1)
			@foreach($products as $item)
			<tr>
				<td>{{ $i++ }}</td>
				<td>{{ $item->code }}</td>
				<td>{{ $item->stock }}</td>
				<td>{{ $item->product }}</td>	
				<td>{{ $item->category }}</td>	
				<td>{{ $item->description }}</td>
				<td>{{ $item->unitary_price }}</td> 
				<td>{{ $item->iva }}</td> 
				<td>{{ $item->discount }}</td> 
				<td>{{ $item->amount }}</td> 

				<td>
				<a href="{{ route('product.edit',$item->id) }}" class="btn btn-info" >Edit </a>	
				<a href="{{ route('product.delete',$item->id) }}" class="btn btn-danger" id="delete" >Delete </a>				

				</td>
			</tr>
			@endforeach

		</tbody>
	</table>
</div>
						</div>
					</div>


					{{ $products->links('vendor.pagination.custom') }}	

			</div>
		</div>

@endsection