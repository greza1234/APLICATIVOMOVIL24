import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'tienda',
    loadChildren: () => import('./pages/tienda/tienda.module').then( m => m.TiendaPageModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./pages/nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'arado',
    loadChildren: () => import('./pages/arado/arado.module').then( m => m.AradoPageModule)
  },
  {
    path: 'construccion',
    loadChildren: () => import('./pages/construccion/construccion.module').then( m => m.ConstruccionPageModule)
  },
  {
    path: 'molino',
    loadChildren: () => import('./pages/molino/molino.module').then( m => m.MolinoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'corte',
    loadChildren: () => import('./pages/corte/corte.module').then( m => m.CortePageModule)
  },
  {
    path: 'motores',
    loadChildren: () => import('./pages/motores/motores.module').then( m => m.MotoresPageModule)
  },
  {
    path: 'picadoras',
    loadChildren: () => import('./pages/picadoras/picadoras.module').then( m => m.PicadorasPageModule)
  },
  {
    path: 'siembra',
    loadChildren: () => import('./pages/siembra/siembra.module').then( m => m.SiembraPageModule)
  },
  {
    path: 'drones',
    loadChildren: () => import('./pages/drones/drones.module').then( m => m.DronesPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
