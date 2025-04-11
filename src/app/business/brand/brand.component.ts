import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Definir el tipo Marca
interface Brand {
  id: number;
  name: string;
  description: string;
  country: string;
  status: string; // Activo/Inactivo
}

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export default class BrandComponent {
  // Declarar el tipo del arreglo brands
  brands: Brand[] = []; // Lista vacía inicializada correctamente

  showForm = false;

  newBrand: Brand = {
    id: 0,
    name: '',
    description: '',
    country: '',
    status: 'Activo', // Estado predeterminado
  };

  toggleForm() {
    this.showForm = !this.showForm;
    this.newBrand = {
      id: this.brands.length > 0 ? Math.max(...this.brands.map(brand => brand.id)) + 1 : 1, // Asignar un nuevo ID único
      name: '',
      description: '',
      country: '',
      status: 'Activo', // Estado predeterminado
    };
  }

  addBrand() {
    if (this.newBrand.name.trim() && this.newBrand.description.trim()) {
      const index = this.brands.findIndex(brand => brand.id === this.newBrand.id);

      if (index !== -1) {
        // Actualiza la marca existente
        this.brands[index] = { ...this.newBrand };
      } else {
        // Agregar una nueva marca
        this.brands.push({ ...this.newBrand });
      }

      this.toggleForm(); // Cierra el formulario
    } else {
      console.error('El nombre y la descripción son obligatorios'); // Mensaje de validación
    }
  }

  editBrand(brand: Brand) {
    this.showForm = true; // Mostrar formulario
    this.newBrand = { ...brand }; // Cargar datos de la marca seleccionada
  }

  deleteBrand(id: number) {
    this.brands = this.brands.filter(brand => brand.id !== id); // Eliminar marca por ID
  }
}
