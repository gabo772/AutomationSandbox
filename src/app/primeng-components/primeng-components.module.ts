import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';

import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';






@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    InputSwitchModule,
    InputGroupAddonModule,
    InputGroupModule,
    ToggleButtonModule,
    MenubarModule,
    BadgeModule,
    AvatarModule,
    RippleModule,
    TableModule,
    TagModule,
    DialogModule,
    DropdownModule,
    ProgressSpinnerModule,
    CardModule,
    FloatLabelModule,
    SweetAlert2Module
  ]
})
export class PrimengComponentsModule { }
