import { Routes } from '@angular/router';
import { InicioComponent } from './Page/inicio/inicio.component';
import { ProductosComponent } from './Page/productos/productos.component';
import { OfertasComponent } from './Page/ofertas/ofertas.component';
import { ContactosComponent } from './Page/contactos/contactos.component';
import { CarritoComponent } from './Compartidos/carrito/carrito.component';
import { FavoritosComponent } from './Compartidos/favoritos/favoritos.component';
import { ComprasComponent } from './Page/compras/compras.component';

export const routes: Routes = [

    {path: "inicio", component: InicioComponent},
    {path: "productos", component: ProductosComponent},
    {path: "ofertas", component: OfertasComponent},
    {path: "contactos", component: ContactosComponent},
      {path:'carrito', component: CarritoComponent},
      {path:'favoritos', component: FavoritosComponent},
      {path:'compras', component: ComprasComponent},
    {path: "", redirectTo: "inicio", pathMatch: "full"},
    {path: "**", redirectTo: "inicio"}
];
