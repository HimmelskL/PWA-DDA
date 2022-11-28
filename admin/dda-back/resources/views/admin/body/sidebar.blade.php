<div class="sidebar-wrapper" data-simplebar="true">
			<div class="sidebar-header">
				<div>
					<img src="{{ asset('backend/assets/images/DDA-96x96.png') }}" class="logo-icon" alt="logo icon">
				</div>
				<div>
					<h6 class="logo-text">Depósito Dental Anáhuac</h6>
				</div>
				<div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
				</div>
			</div>
			<!--navigation-->
			<ul class="metismenu" id="menu">
			<li>
				<a href="{{ url('/dashboard') }}">
					<div class="parent-icon"><i class='bx bx-home-circle'></i>
					</div>
					<div class="menu-title">Dashboard</div>
				</a>
			</li>

				
				<li>
					<a href="javascript:;" class="has-arrow">
						<div class="parent-icon"><i class='bx bx-bookmark-heart'></i>
						</div>
						<div class="menu-title">Categorías</div>
					</a>
					<ul>
					<li> <a href="{{ route('all.category') }}"><i class="bx bx-right-arrow-alt"></i>Todas las categorías</a>
					</li>
					<li> <a href="{{ route('add.category') }}"><i class="bx bx-right-arrow-alt"></i>Nueva categoría </a>
					</li>

				</ul>
				</li>
				
				<li>
					<a class="has-arrow" href="javascript:;">
						<div class="parent-icon"><i class="bx bx-grid-alt"></i>
						</div>
						<div class="menu-title">Productos</div>
					</a>
					<ul>
						<li> <a href="{{ route('all.product') }}"><i class="bx bx-right-arrow-alt"></i>Todos los productos</a>
						</li>
						<li> <a href="{{ route('add.product') }}"><i class="bx bx-right-arrow-alt"></i>Nuevo producto</a>
						</li>

					</ul>
				</li>

				
			</ul>
			<!--end navigation-->
		</div>