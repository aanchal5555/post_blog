import { Component } from '@angular/core';
import { FormService } from '../shared/form.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  posts: any[] = [];

  constructor(public formService: FormService, public router: Router) { }

  ngOnInit(): void {
    this.getUserForm();
  }

  getUserForm() {
    this.formService.getUser().subscribe((res: any) => {
      this.posts = res;
    });
  }

  onDelete(id: string) {
    this.formService.deleteUser(id).subscribe((res: any) => {
      console.log(res);
      this.getUserForm();
    });
  }

  onUpdate(user: any) {
    if (user && user.image) {
      this.router.navigate(['create']);
      this.formService.form = new FormGroup({
        _id: new FormControl(user._id || ''), // Use empty string as default value if _id is undefined
        name: new FormControl(user.name || ''), // Use empty string as default value if name is undefined
        title: new FormControl(user.title || ''), // Use empty string as default value if title is undefined
        content: new FormControl(user.content || ''), // Use empty string as default value if content is undefined
        date: new FormControl(user.date || ''), // Use empty string as default value if date is undefined
        image: new FormControl(user.image || '') // Use empty string as default value if image is undefined
      });
    } else {
      console.error("image is undefined.");
      // Handle the error scenario here, such as displaying a message to the user or navigating back.
    }
  }
}