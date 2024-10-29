import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tarjeta-producto.component.html',
  styleUrl: './tarjeta-producto.component.css'
})
export class TarjetaProductoComponent {

  tituloProducto = 'CUCHARA';
  precioBase = 2;
  precio = 2;
  mensaje = 'Esto es un mensaje';

  saludo2(){
    this.mensaje = 'Saludos desde la Galaxia';
  }

  descuento(){
    this.precio = this.precio - 1;
  }

  restablecer(){
    this.precio = this.precioBase;
  }
}
