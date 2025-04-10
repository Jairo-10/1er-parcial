import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule para *ngIf
import { FormsModule } from '@angular/forms'; // Importar FormsModule para [(ngModel)]

@Component({
  selector: 'app-user',
  standalone: true, // Declarar componente independiente
  imports: [CommonModule, FormsModule], // Importar CommonModule y FormsModule
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export default class UserComponent {
  users = [
    {
      id: 1,
      name: 'Juan Pérez',
      email: 'juan.perez@example.com',
      phone: '123-456-7890',
      address: 'Calle Falsa 123, Ciudad',
      birthDate: '1990-01-15',
      role: 'Administrador',
    },
    {
      id: 2,
      name: 'Ana López',
      email: 'ana.lopez@example.com',
      phone: '987-654-3210',
      address: 'Avenida Principal 456, Ciudad',
      birthDate: '1985-06-25',
      role: 'Empleado',
    },
  ];

  showForm = false;

  newUser = {
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
      id: this.users.length + 1,
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
      this.users.push({ ...this.newUser });
      this.toggleForm();
    }
  }
}
