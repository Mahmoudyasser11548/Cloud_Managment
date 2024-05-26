export class Permission {
    user: any = null;
    permissions: string[] = [];
    roles: string[] = [];
  
    constructor() {
      this.updateValues();
    }
  
    updateValues() {
      const userData = localStorage.getItem('userData');
      this.user = userData ? JSON.parse(userData) : null;
      this.permissions = this.user ? JSON.parse(this.user.permissions) : [];
      this.roles = this.user && this.user.role ? JSON.parse(this.user.role) : [];
    }
  
    can(permission: string): boolean {
      if (!this.user) {
        this.updateValues();
      }
      return this.permissions.includes(permission);
    }
  }
  
  export default new Permission();
  