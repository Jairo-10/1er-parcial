import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Definir el tipo Usuario
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  birthDate: string;
  role: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export default class UserComponent {
  // Declarar el tipo del arreglo users
  users: User[] = []; // Lista vacía inicializada correctamente

  showForm = false;

  newUser: User = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    address: '',
    birthDate: '',
    role: '',
  };

  toggleForm() {
    this.showForm = !this.showForm;
    this.newUser = {
      id: this.users.length > 0 ? Math.max(...this.users.map(user => user.id)) + 1 : 1, // Asignar un nuevo ID único
      name: '',
      email: '',
      phone: '',
      address: '',
      birthDate: '',
      role: '',
    };
  }

  addUser() {
    if (this.newUser.name.trim() && this.newUser.email.trim()) {
      const index = this.users.findIndex(user => user.id === this.newUser.id);

      if (index !== -1) {
        // Actualiza el usuario existente
        this.users[index] = { ...this.newUser };
      } else {
        // Agregar un nuevo usuario
        this.users.push({ ...this.newUser });
      }

      this.toggleForm(); // Cierra el formulario
    } else {
      console.error('El nombre y el correo electrónico son obligatorios'); // Mensaje de validación
    }
  }

  editUser(user: User) {
    this.showForm = true; // Mostrar formulario
    this.newUser = { ...user }; // Cargar datos del usuario seleccionado
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id); // Eliminar usuario por ID
  }
}
