import { Component, OnInit } from '@angular/core';
import { FormService } from '../shared/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  imagePreview: any;

  constructor(public formService: FormService,
              public router: Router) { }

  ngOnInit(): void {
  }


  onSelectImage(event: any) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      console.log(file.type);
      this.formService.form.patchValue({
        image: file,
      });

      const allowedFileTypes = ['image/png', 'image/jpg', 'image/jpeg'];
      if (allowedFileTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreview = reader.result as string;
        };
        reader.readAsDataURL(file);
      }
    }
  }

  onSubmit() {
    if (this.formService.form.value._id === '') {
      this.formService.addUser(this.formService.form.value, this.formService.form.value.image)
        .subscribe((res: any) => {

        });
    } else {
      this.formService.updateUser(this.formService.form.value, this.formService.form.value.image)
        .subscribe((res: any) => {

        });

    }
    this.router.navigate(['view']);
    this.imagePreview = null;
  }
}
