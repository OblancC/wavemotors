import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable()
export class loginGuard implements CanActivate {
  constructor(private loginService: LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!this.loginService.hasPermission(1) && state.url.includes('/admin')){
      alert('Você não tem permissão para acessar essa página');
      return false;
    }

    return true;
  }
} 