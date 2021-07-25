import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Col} from '../../../../models/setting/col';
import { User } from '../../../../models/auth/user';
import { FormGroup } from '@angular/forms';
import { Paginator } from '../../../../models/setting/paginator';
import {MessageService} from '../../../shared/services/message.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {UserAdministrationService } from '../../../../services/auth/user-administration.service';
import {HttpParams} from '@angular/common/http';
import { Role } from 'src/app/models/auth/role';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() flagUsers: boolean;
  @Input() usersIn: User[];
  @Input() rolesIn: Role[];
  @Input() paginatorUserIn: Paginator;
  @Input() formUserIn: FormGroup;
  @Input() displayIn: boolean;
  @Output() usersOut = new EventEmitter<User[]>();
  @Output() formUserOut = new EventEmitter<FormGroup>();
  @Output() displayOut = new EventEmitter<boolean>();
  @Output() displayEditOut = new EventEmitter<boolean>();
  @Output() paginatorUserOut = new EventEmitter<Paginator>();
  @Output() rolesOut = new EventEmitter<Role[]>();
  @Output() userRoleOut = new EventEmitter<String>();


  selectedUsers: any[];
  selectedUser: User;
  rolesUser: Role[];
  colsUser: Col[];
  dialogViewRoles: boolean;
  paginatorRoles: Paginator;
  userName: String;
  userId: String;

  constructor(private messageService: MessageService,
    private spinnerService: NgxSpinnerService,
    private userAdministrationService: UserAdministrationService) {
      this.resetPaginatorUsers();
  }

  ngOnInit(): void {
    this.loadColsUser();
  }

  loadColsUser() {
    this.colsUser = [
        {field: 'partial_name', header: 'Nombres'},
        {field: 'identification', header: 'Identificación'},
        {field: 'email', header: 'Corréo Electrónico'},
      ];
  }

  paginateUser(event) {
    this.paginatorUserIn.current_page = event.page + 1;
    this.paginatorUserOut.emit(this.paginatorUserIn);
    
  }

  resetPaginatorUsers() {
    this.paginatorUserIn = {current_page: 1, per_page: 5};
  }
  
  searchUsers(event, search) {
    if (event.type === 'click' || event.keyCode === 13 || search.length === 0) {
        const params = search.length > 0 ? new HttpParams().append('search', search) : null;
        this.spinnerService.show();
        this.userAdministrationService.get('user-admins', params).subscribe(response => {
            this.usersIn = response['data'],
                this.spinnerService.hide();
        }, error => {
            this.spinnerService.hide();
            this.messageService.error(error);
          });
      }
  }

  sendUsers() {
    this.usersOut.emit(this.usersIn);
  }

  openNewUserForm() {
    this.formUserIn.reset();
    this.formUserOut.emit(this.formUserIn);
    this.displayOut.emit(true);
  }

  openEditUserForm(user: User) {
    this.formUserIn.patchValue(user);
    this.formUserOut.emit(this.formUserIn);
    this.displayEditOut.emit(true);
  }

  deleteUsers(user = null) {
    this.messageService.questionDelete({})
        .then((result) => {
            if (result.isConfirmed) {
                if (user) {
                    this.selectedUsers = [];
                    this.selectedUsers.push(user);
                }
                const ids = this.selectedUsers.map(element => element.id);
                this.spinnerService.show();
                this.userAdministrationService.delete('user-admin/delete', ids)
                    .subscribe(response => {
                        this.spinnerService.hide();
                        this.messageService.success(response);
                        this.removeUsers(ids);
                        this.selectedUsers = [];
                    }, error => {
                        this.spinnerService.hide();
                        this.messageService.error(error);
                    });
            }
        });

}

removeUsers(ids) {
  for (const id of ids) {
      this.usersIn = this.usersIn.filter(element => element.id !== id);
  }
  this.usersOut.emit(this.usersIn);
}

selectUser(user: User) {
  this.selectedUser = user;
}

openViewRoles() {
  this.getRolesUser();
}

getRolesUser() {
  let params = new HttpParams().append('id', this.selectedUser.id.toString());
  this.userName = this.selectedUser.partial_name;
  this.userId = this.selectedUser.id.toString();
  this.spinnerService.show();
  this.userAdministrationService.get('user-admin/rolesUser', params).subscribe(response => {
      this.spinnerService.hide();
      this.rolesUser = response['data'];
      this.paginatorRoles = response as Paginator;
      this.dialogViewRoles = true;
  }, error => {
      this.spinnerService.hide();
      this.rolesUser = [];
      this.dialogViewRoles = true;
      this.messageService.error(error);
  });
}
}
