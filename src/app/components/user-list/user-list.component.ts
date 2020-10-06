import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'git-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private userProfile: any;
  private searchTerm: string;
  private userDetails: any = [];
  private sortBy: string = 'asec';

  constructor(private userService: UserService) { }

  // function which will get executed first time on load of page component
  ngOnInit() {
    this.getUserProfile();
  }

  // 
  getUserProfile = () => {
    this.userService.getUser(this.searchTerm).subscribe(user => {
      this.userProfile = user;
    });
  }

  getUserDetails(userName) {
    this.userDetails = [];
    this.userService.getUserDetails(userName).subscribe(user => {
      this.userDetails = user;
    });
  }

  sortByAsec() {
    this.userProfile.items.sort((a, b) => {
      if (a.login < b.login) return -1;
      else if (a.login > b.login) return 1;
      else return 0;
    });
  }

  sortByDesc() {
    this.userProfile.items.sort((a, b) => {
      if (a.login < b.login) return 1;
      else if (a.login > b.login) return -1;
      else return 0;
    });
  }

  sortScore(sortBy) {
    if (sortBy === 'asc') {
      this.userProfile.items.sort((a, b) => {
        if (a.score < b.score) return -1;
        else if (a.score > b.score) return 1;
        else return 0;
      });
    } else {
      this.userProfile.items.sort((a, b) => {
        if (a.score < b.score) return 1;
        else if (a.score > b.score) return -1;
        else return 0;
      });
    }
  }
}

