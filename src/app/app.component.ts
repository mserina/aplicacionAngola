import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaludoComponent } from "./saludo/saludo.component";
import { TarjetaProductoComponent } from "./tarjeta-producto/tarjeta-producto.component";
import { UsuarioComponent } from "./usuario/usuario.component";
import { TablaComponent } from "./tabla/tabla.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SaludoComponent, TarjetaProductoComponent, UsuarioComponent, TablaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MiPrimerProyecto';
}
