import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from './theme-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'Automation Sandbox';

  constructor(private themeService: ThemeServiceService) {
    if (localStorage.getItem("dark") === "true") {
      this.themeService.switchTheme("bootstrap-dark-purple")
    }
  }


  ngOnInit(): void {


  }

  stringToBoolean(param: string): boolean {
    return param.toLowerCase() === 'true'
  }
}
