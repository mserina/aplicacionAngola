import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  usuario  = 
  {
    nombre: "Jose",
    nombreBase: "Jose",  
    edad: 12
  }

  restablecer()
  {
    this.usuario.nombre = this.usuario.nombreBase;
  }

}
