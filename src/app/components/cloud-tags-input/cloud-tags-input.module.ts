import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CloudTagsInputComponent } from './cloud-tags-input.component';
import { TagComponent } from './tag/tag.component';

@NgModule({
  declarations: [CloudTagsInputComponent, TagComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CloudTagsInputComponent],
  bootstrap: [CloudTagsInputComponent]
})
export class CloudTagsInputModule {}
