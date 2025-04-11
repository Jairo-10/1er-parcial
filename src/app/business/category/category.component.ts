import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Definir el tipo Categoría
interface Category {
  id: number;
  name: string;
  description: string;
  status: string; // Activo/Inactivo
}

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export default class CategoryComponent {
  // Declarar el tipo del arreglo categories
  categories: Category[] = []; // Lista vacía inicializada correctamente

  showForm = false;

  newCategory: Category = {
    id: 0,
    name: '',
    description: '',
    status: 'Activo', // Estado predeterminado
  };

  toggleForm() {
    this.showForm = !this.showForm;
    this.newCategory = {
      id: this.categories.length > 0 ? Math.max(...this.categories.map(category => category.id)) + 1 : 1, // Asignar un nuevo ID único
      name: '',
      description: '',
      status: 'Activo', // Estado predeterminado
    };
  }

  addCategory() {
    if (this.newCategory.name.trim() && this.newCategory.description.trim()) {
      const index = this.categories.findIndex(category => category.id === this.newCategory.id);

      if (index !== -1) {
        // Actualiza la categoría existente
        this.categories[index] = { ...this.newCategory };
      } else {
        // Agregar una nueva categoría
        this.categories.push({ ...this.newCategory });
      }

      this.toggleForm(); // Cierra el formulario
    } else {
      console.error('El nombre y la descripción son obligatorios'); // Mensaje de validación
    }
  }

  editCategory(category: Category) {
    this.showForm = true; // Mostrar formulario
    this.newCategory = { ...category }; // Cargar datos de la categoría seleccionada
  }

  deleteCategory(id: number) {
    this.categories = this.categories.filter(category => category.id !== id); // Eliminar categoría por ID
  }
}