import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeratorService } from '../../services/moderator.service';

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.scss']
})
export class ModeratorComponent {
  moderatorsList$!: Observable<any>;
  
  constructor(private moderatorService: ModeratorService){
    this.moderatorsList$ = this.moderatorService.getmoderatorsList();
  }
  
}
