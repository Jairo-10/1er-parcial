import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Definir el tipo Producto
interface Product {
  id: number;
  name: string;
  description: string;
  brand: string;
  category: string;
  purchasePrice: number;
  salePrice: number;
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export default class ProductComponent {
  // Declarar el arreglo de productos
  products: Product[] = []; // Lista vacía inicializada correctamente

  showForm = false;

  newProduct: Product = {
    id: 0,
    name: '',
    description: '',
    brand: '',
    category: '',
    purchasePrice: 0,
    salePrice: 0,
  };

  toggleForm() {
    this.showForm = !this.showForm;
    this.newProduct = {
      id: this.products.length > 0 ? Math.max(...this.products.map(product => product.id)) + 1 : 1, // Asignar un nuevo ID único
      name: '',
      description: '',
      brand: '',
      category: '',
      purchasePrice: 0,
      salePrice: 0,
    };
  }

  addProduct() {
    if (
      this.newProduct.name.trim() &&
      this.newProduct.description.trim() &&
      this.newProduct.purchasePrice > 0 &&
      this.newProduct.salePrice > 0
    ) {
      const index = this.products.findIndex(product => product.id === this.newProduct.id);

      if (index !== -1) {
        // Actualiza el producto existente
        this.products[index] = { ...this.newProduct };
      } else {
        // Agregar un nuevo producto
        this.products.push({ ...this.newProduct });
      }

      this.toggleForm(); // Cierra el formulario
    } else {
      console.error('El nombre, descripción y precios son obligatorios'); // Mensaje de validación
    }
  }

  editProduct(product: Product) {
    this.showForm = true; // Mostrar formulario
    this.newProduct = { ...product }; // Cargar datos del producto seleccionado
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id); // Eliminar producto por ID
  }

  //por el momento para la parte de marca y categoria dinamica------------------------
  brands: string[] = ['Samsung', 'Honor', 'Apple'];
  categories: string[] = ['Electrónica', 'Ropa', 'Accesorios'];

  ngOnInit() {
    // Simulación de datos hasta conectar con base de datos o servicio.
    this.brands = ['Samsung', 'Nike', 'Apple'];
    this.categories = ['Electrónica', 'Ropa', 'Accesorios'];
  }
}
